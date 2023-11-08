import Image from "next/image";

export default function Catalog() {
  return (
    <main>
      <h1>Lorem</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <p>Lorem Ipsum</p>
    </main>
  );
}
