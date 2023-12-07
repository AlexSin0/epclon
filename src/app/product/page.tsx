import Image from "next/image";

export default function Cart() {
  return (
    <main className="bg-slate-500 p-1 text-white">
      <div className="p-2 flex w-full max-h-screen">
        <Image
          src="/placeholderHD.jpg"
          alt="placeholderHD.jpg"
          className="w-full"
          width={800}
          height={800}
          priority
        />
        <div className="text-lg text-white p-1 max-w-[30%] ">
          <div>
            <p className="text-xl break-words">
              NAME-VERYLOOOooooooooooooooo ooooooooooooongNAAAAA
              AAAAAAAAAMEEEEEEEeeeeeeeeeeeeeeeeee
            </p>
            <p className="text-sm">Brand:BRAND</p>
            <hr />
            <p className="pt-1">
              Price:<span>10000000$</span>
            </p>
            <button
              type="submit"
              className="bg-[#21ad9a] p-2 rounded-xl w-full"
            >
              Add to Cart
            </button>
          </div>
          <div className="pt-5 max-h-[70%] overflow-scroll w-full">
            <table className="border border-slate-400 table-auto">
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
                <td className="border border-slate-400">
                  Тактова частота ядра
                </td>
                <td className="border border-slate-400">1440 MHz</td>
              </tr>
              <tr>
                <td className="border border-slate-400">
                  Тактова частота пам'яті
                </td>
                <td className="border border-slate-400">19 Gbps</td>
              </tr>
              <tr>
                <td className="border border-slate-400">ADD MORE</td>
                <td className="border border-slate-400">INFO</td>
              </tr>
              <tr>
                <td className="border border-slate-400">ADD MORE</td>
                <td className="border border-slate-400">INFO</td>
              </tr>
              <tr>
                <td className="border border-slate-400">ADD MORE</td>
                <td className="border border-slate-400">INFO</td>
              </tr>
              <tr>
                <td className="border border-slate-400">ADD MORE</td>
                <td className="border border-slate-400">INFO</td>
              </tr>
              <tr>
                <td className="border border-slate-400">ADD MORE</td>
                <td className="border border-slate-400">INFO</td>
              </tr>
              <tr>
                <td className="border border-slate-400">ADD MORE</td>
                <td className="border border-slate-400">INFO</td>
              </tr>
              <tr>
                <td className="border border-slate-400">ADD MORE</td>
                <td className="border border-slate-400">INFO</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
