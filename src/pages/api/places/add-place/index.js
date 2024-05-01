import { connectToDatabase } from "../../db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const db = await connectToDatabase();
      const posts = db.collection("places");

      const newData = req.body;
      console.log("newData", newData);

      const result = await posts.insertOne(newData);
      res.status(201).json({ message: "Data inserted successfully" });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Unable to insert data into database" });
    }
  } else {
    res.status(405).json({ error: "Unsupported HTTP method" });
  }
}
