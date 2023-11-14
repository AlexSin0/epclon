import { getServerSession } from "next-auth";
import { space } from "postcss/lib/list";

export default async function Home() {
  const session = await getServerSession();

  return <p>{JSON.stringify(session)}</p>;
}
