import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../db";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const {
        locationType,
        locationName,
        address,
        city,
        postalCode,
        country,
        detail,
      } = req.body;

      const db = await connectToDatabase();
      const collection = db.collection("places");

      const item = await collection.findOne({ _id: new ObjectId(id) });

      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }

      const updatedItem = {
        locationType,
        locationName,
        address,
        city,
        postalCode,
        country,
        detail,
      };

      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedItem }
      );

      res
        .status(200)
        .json({ message: "Item updated successfully", item: updatedItem });
    } catch (error) {
      console.log("Error updating item:", error);
      res.status(500).json({ error: "Unable to update item" });
    }
  } else {
    res.status(405).json({ error: "Unsupported HTTP method" });
  }
}
