import { connectToDatabase } from "../../db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connectToDatabase();
      const posts = db.collection("places");
      const result = await posts.find({}).toArray();
      res.status(200).json(result);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Unable to connect to database" });
    }
  } else {
    res.status(405).json({ error: "Unsupported HTTP method" });
  }
}
