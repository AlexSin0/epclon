import Image from "next/image";

export default function Cart() {
  return (
    <main className="bg-slate-500">
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
        <div className="border text-lg text-white p-1 max-w-[50%]">
          <p className="text-xl break-words">
            NAME-VERYLOOOoooooooooooooooooooooooooooongNAAAAAAAAAAAAAAMEEEEEEEeeeeeeeeeeeeeeeeee
          </p>
          <p className="text-sm">Brand:BRAND</p>
          <hr />
          <p>
            Price:<span>10000000$</span>
          </p>
          <p>Color:COLOR</p>
          <p>anotherCharacteristic</p>
          <button type="submit" className="bg-[#21ad9a] p-2 rounded-xl w-full">
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <p>
          DESCRIPTION
          NAME
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>ListOfCharacteristics
      <table className="border">
            <tr>
                <th>Характеристика</th>
                <th>Значення</th>
            </tr>
            <tr>
                <td>Бренд</td>
                <td>NVIDIA</td>
            </tr>
            <tr>
                <td>Модель</td>
                <td>GeForce RTX 3080</td>
            </tr>
            <tr>
                <td>Обсяг пам'яті</td>
                <td>10GB GDDR6X</td>
            </tr>
            <tr>
                <td>Тактова частота ядра</td>
                <td>1440 MHz</td>
            </tr>
            <tr>
                <td>Тактова частота пам'яті</td>
                <td>19 Gbps</td>
            </tr>
            <tr>
                <td>ADD MORE</td>
                <td>INFO</td>
            </tr>
        </table>
      </div>
    </main>
  );
}
