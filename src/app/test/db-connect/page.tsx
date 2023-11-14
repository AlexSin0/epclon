import { userCollection } from "@/lib/MongoConnect";

export default async function H() {
  const res = await userCollection.find().toArray();

  return <p>Users: {JSON.stringify(res)}</p>;
}
