import { MongoClient } from "mongodb";
import isLoggedIn from "../../isLoggedIn";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "pages", "api", "db", "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  const token = req.body?.token?.token;

  try {
    await client.connect(); // Connect to the MongoDB Server
    switch (req.method) {
      case "POST":
        if (isLoggedIn(token)) {
          const result = await client
            .db("domain-hub")
            .collection("who-is-hosting")
            .updateOne(
              {},
              {
                $pull: {
                  hostingTable: {
                    uniqueId: req.body.uniqueId,
                  },
                },
              }
            );

          if (result.modifiedCount > 0 || result.upsertedCount > 0) {
            res.json({
              status: true,
              message: "Deleted successfully",
            });
          } else {
            res.json({
              status: false,
              message: "Deletion was not successful. Please try again",
            });
          }
        } else {
          res.json({
            status: false,
            message: "Deletion was not successful. please login again",
          });
        }

        break;
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
  },
};
