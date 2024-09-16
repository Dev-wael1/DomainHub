import multer from "multer";
import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";
import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "pages", "api", "db", "db.json");

export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  const dynamicDestination = (req, _file, cb) => {
    const destinationPath = `./public/${req.body.storagePath}`;
    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath, { recursive: true });
    }
    cb(null, destinationPath);
  };

  const upload = multer({
    storage: multer.diskStorage({
      destination: dynamicDestination,
      filename: (_req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  });

  try {
    switch (req.method) {
      case "POST":
        upload.single("heroImage")(req, res, async (_err) => {
          await client.connect(); // Connect to the MongoDB Server
          const token = JSON.parse(req.body?.token)?.token;

          const {
            title,
            desc,
            enable,
            leftButtonText,
            leftButtonLink,
            rightButtonText,
            rightButtonLink,
            leftStarText,
            rightStarText,
          } = req.body;

          if (isLoggedIn(token)) {
            const files = req?.file?.path;

            const currentImage = await client
              .db("domain-hub")
              .collection(req.body?.dbCollection)
              .findOne({}, { projection: { _id: 0, hero_1: 1 } });

            const updateData = {
              title: title,
              desc: desc,
              leftButtonText: leftButtonText,
              leftButtonLink: leftButtonLink,
              rightButtonText: rightButtonText,
              rightButtonLink: rightButtonLink,
              leftStarText: leftStarText,
              rightStarText: rightStarText,
              enable: JSON.parse(enable),
              heroImage: currentImage?.hero_1?.heroImage,
            };

            if (files) {
              updateData.heroImage = files;
            }

            const result = await client
              .db("domain-hub")
              .collection(req.body?.dbCollection)
              .updateOne(
                {},
                { $set: { hero_1: updateData } },
                { upsert: true }
              );

            if (result.modifiedCount > 0 || result.upsertedCount > 0) {
              res.json({
                status: true,
                message: "Updated successfully",
              });
            } else {
              res.json({
                status: false,
                message:
                  "Update was not successful. Data remains same. Please change some input.",
              });
            }
          } else {
            res.json({
              status: false,
              message: "Update was not successful. Please login again.",
            });
          }
        });
        break;

      case "GET":
        await client.connect();
        await client
          .db("domain-hub")
          .collection(req.query.dbCollection)
          .findOne({}, { projection: { _id: 0, hero_1: 1 } })
          .then((docs) => res.json(docs));
    }
  } catch (error) {
    console.log("Some error occurred", error);
  } finally {
    await client.close();
  }
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
