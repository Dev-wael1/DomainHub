import multer from "multer";
import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";

const filePath = path.join(process.cwd(), "pages", "api", "db", "db.json");
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/exit-modal",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  limits: {
    fileSize: 10000000000,
  },
});
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  try {
    switch (req.method) {
      case "POST":
        upload.single("image")(req, res, async (err) => {
          const token = JSON.parse(req.body?.token)?.token;
          await client.connect(); // Connect to the MongoDB Server
          if (isLoggedIn(token)) {
            const {
              iconText1,
              iconText2,
              iconText3,
              title,
              leftButtonText,
              leftButtonLink,
              rightButtonText,
              rightButtonLink,
            } = req.body;

            const files = req?.file?.path;

            const currentImage = await client
              .db("domain-hub")
              .collection("exit-modal")
              .findOne({}, { projection: { _id: 0, exitModal: 1 } });

            const updateData = {
              iconText1,
              iconText2,
              iconText3,
              title,
              leftButtonText,
              leftButtonLink,
              rightButtonText,
              rightButtonLink,
              image: currentImage?.exitModal?.image,
            };

            if (files) {
              updateData.image = files;
            }

            const result = await client
              .db("domain-hub")
              .collection("exit-modal")
              .updateOne(
                {},
                { $set: { exitModal: updateData } },
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
                message: "Update was not successful. Please change some input.",
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
        await client
          .db("domain-hub")
          .collection("exit-modal")
          .findOne({}, { projection: { _id: 0, exitModal: 1 } })
          .then((docs) => res.json(docs));
    }
  } catch (error) {
    console.log("some error occurred", error);
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
