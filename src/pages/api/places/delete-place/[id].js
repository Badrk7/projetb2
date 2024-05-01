import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../db";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      const db = await connectToDatabase();
      const collection = db.collection("places");

      const itemId = new ObjectId(id);

      const result = await collection.deleteOne({ _id: itemId });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Item deleted successfully" });
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      console.log("Error deleting item:", error);
      res.status(500).json({ error: "Unable to delete item" });
    }
  } else {
    res.status(405).json({ error: "Unsupported HTTP method" });
  }
}
