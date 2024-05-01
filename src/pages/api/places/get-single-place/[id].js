import { connectToDatabase } from "../../db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const itemId = new ObjectId(id);
    try {
      const db = await connectToDatabase();
      const collection = db.collection("places");

      const item = await collection.findOne({ _id: itemId });

      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }

      res.status(200).json(item);
    } catch (error) {
      console.log("Error fetching item:", error);
      res.status(500).json({ error: "Unable to fetch item" });
    }
  } else {
    res.status(405).json({ error: "Unsupported HTTP method" });
  }
}
