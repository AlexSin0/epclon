import { db } from "@/MongoConnect";

export default async function H() {
  const col = db.collection("Users");
  const res = await col.find().toArray();

  return <p>Users: {JSON.stringify(res)}</p>;
}
