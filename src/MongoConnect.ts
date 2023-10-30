import { MongoClient } from "mongodb";
import { env } from "process";

const uri = process.env.MONGO_CONNECTION_STRING!;

const client = new MongoClient(uri);

export const db = client.db("EpclonDB");
