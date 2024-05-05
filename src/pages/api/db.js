import { MongoClient } from "mongodb";
const uri ="mongodb+srv://badrkamal:LweTWZ5mKlUTzB1X@cluster0.f81tfvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    let database = client.db("places");
    return database;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export { connectToDatabase };
