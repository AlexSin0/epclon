import ShopItem from "@/types/ShopItem";
import ShopUser from "@/types/ShopUser";
import { Collection, MongoClient } from "mongodb";

const uri = process.env.MONGO_CONNECTION_STRING!;

const client = new MongoClient(uri);

export const db = client.db("EpclonDB");

export const userCollection = db.collection("Users") as Collection<ShopUser>;
export const shopItemCollection = db.collection(
  "ShopItems"
) as Collection<ShopItem>;
