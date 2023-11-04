import { MongoClient } from "mongodb";

const uri = process.env.MONGO_CONNECTION_STRING!;

const client = new MongoClient(uri);

export const db = client.db("EpclonDB");

export const userCollection = db.collection("Users");
