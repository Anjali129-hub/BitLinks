import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Add MONGODB_URI to .env.local");

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Use a global variable to prevent multiple connections in dev
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client for each build
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
