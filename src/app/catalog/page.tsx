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
      <div className="grid grid-cols-3 gap-4 m-2 p-2">
        <div className="bg-white w-[500px] h-[500px]">01</div>
        <div className="bg-white w-[500px] h-[500px]">02</div>
        <div className="bg-white w-[500px] h-[500px]">03</div>
      </div>
    </main>
  );
}
