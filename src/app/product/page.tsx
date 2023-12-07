import Image from "next/image";

export default function Cart() {
  return (
    <main className="bg-slate-500 p-1 text-white">
      <div className="p-2 flex border w-full">
        <div className="border">
          <Image
            src="/placeholderHD.jpg"
            alt="placeholderHD.jpg"
            className=""
            width={900}
            height={900}
            priority
          />
        </div>
        <div className="border grid grid-rows-3 pl-0">
          <Image
            src="/placeholderHD.jpg"
            alt="placeholderHD.jpg"
            className="dark:invert border"
            width={300}
            height={300}
            priority
          />
          <Image
            src="/placeholderHD.jpg"
            alt="placeholderHD.jpg"
            className="dark:invert border"
            width={300}
            height={300}
            priority
          />
          <Image
            src="/placeholderHD.jpg"
            alt="placeholderHD.jpg"
            className="dark:invert border"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="border text-lg text-white p-1 max-w-[50%] relative">
          <p className="text-xl break-words">
            NAME-VERYLOOOooooooooooooooo ooooooooooooongNAAAAA
            AAAAAAAAAMEEEEEEEeeeeeeeeeeeeeeeeee
          </p>
          <p className="text-sm">Brand:BRAND</p>
          <hr />
          <p>
            Price:<span>10000000$</span>
          </p>
          <p>SMALL DESCRIPTION</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <button
            type="submit"
            className="bg-[#21ad9a] p-2 rounded-xl w-40 right-0 bottom-0 absolute"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-lg border bg-slate-600 p-2 flex">
        <div className="max-w-[50%]">
        <p>DESCRIPTION</p>
        <p>NAME</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <table className="border border-slate-400 table-auto w-full">
          <tr>
            <th className="border border-slate-400">Характеристика</th>
            <th className="border border-slate-400">Значення</th>
          </tr>
          <tr>
            <td className="border border-slate-400">Бренд</td>
            <td className="border border-slate-400">NVIDIA</td>
          </tr>
          <tr>
            <td className="border border-slate-400">Модель</td>
            <td className="border border-slate-400">GeForce RTX 3080</td>
          </tr>
          <tr>
            <td className="border border-slate-400">Обсяг пам'яті</td>
            <td className="border border-slate-400">10GB GDDR6X</td>
          </tr>
          <tr>
            <td className="border border-slate-400">Тактова частота ядра</td>
            <td className="border border-slate-400">1440 MHz</td>
          </tr>
          <tr>
            <td className="border border-slate-400">Тактова частота пам'яті</td>
            <td className="border border-slate-400">19 Gbps</td>
          </tr>
          <tr>
            <td className="border border-slate-400">ADD MORE</td>
            <td className="border border-slate-400">INFO</td>
          </tr>
        </table>
      </div>
    </main>
  );
}
