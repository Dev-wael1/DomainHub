import { MongoClient } from "mongodb";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "pages", "api", "db", "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  try {
    await client.connect();
    switch (req.method) {
      case "GET":
        await client
          .db("domain-hub")
          .collection("best-woocommerce-hosting")
          .findOne({})
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
  },
};
