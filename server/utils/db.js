import { MongoClient } from "mongodb";
const connectionString = "mongodb://127.0.0.1:27017";
export const client = new MongoClient(connectionString);

export let db = client.db("products");