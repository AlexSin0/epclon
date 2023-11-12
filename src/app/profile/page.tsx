import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      <Image src={session?.user?.image!} alt="" width={100} height={100} />
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
    </main>
  );
}
