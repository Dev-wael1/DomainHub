import multer from "multer";
import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";
import path from "path";
import fs from "fs";
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/all-reviews/hosting-logo",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  limits: {
    fileSize: 10000000000,
  },
});
const filePath = path.join(process.cwd(), "pages", "api", "db", "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);

  try {
    switch (req.method) {
      case "POST":
        upload.single("postImage")(req, res, async (err) => {
          const token = JSON.parse(req.body?.token)?.token;
          await client.connect(); // Connect to the MongoDB Server
          if (isLoggedIn(token)) {
            const { id, title, permalink, meta, content, published, date } =
              req.body;

            const files = req?.file?.path;

            const currentImage = await client
              .db("domain-hub")
              .collection("blog")
              .findOne(
                { "allPost.id": id },
                {
                  projection: {
                    allPost: {
                      $elemMatch: { id: id },
                    },
                  },
                }
              );
            //   console.log(uniqueId);
            const updateData = {
              id,
              title,
              permalink,
              meta,
              content,
              published,
              date,
              postImage: currentImage.allPost[0]?.postImage,
            };
            if (files) {
              updateData.postImage = files;
            }
            //   console.log(currentImage.addHosting[0]?.hostingImage);

            const result = await client
              .db("domain-hub")
              .collection("blog")
              .updateOne(
                {
                  "allPost.id": id,
                },
                {
                  $set: {
                    "allPost.$": updateData,
                  },
                }
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
          .collection("blog")
          .findOne({}, { projection: { _id: 0, seo: 1 } })
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
