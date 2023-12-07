import { GetShopItem, PriceFormat } from "@/lib/Catalog";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  if (!searchParams || !searchParams.id) {
    return <p>Error. Item not found</p>;
  }

  let itemId;
  try {
    itemId = new ObjectId(searchParams.id);
  } catch (error) {
    return <p>Error. Item not found</p>;
  }

  const shopItem = await GetShopItem(itemId);

  let props = [];
  for (const key in shopItem.props) {
    const val = (shopItem.props as any)[key];

    props.push(
      <tr key={key}>
        <td className="border border-slate-400">{key}</td>
        <td className="border border-slate-400">{val}</td>
      </tr>
    );
  }

  return (
    <main className="bg-slate-500 p-1 text-white">
      <div className="p-2 flex w-full max-h-screen">
        <Image
          src={shopItem.image}
          alt={`${shopItem.name} image`}
          className="w-full"
          width={800}
          height={800}
        />
        <div className="text-lg text-white p-1 max-w-[30%] ">
          <div>
            <p className="text-xl break-words">{shopItem.name}</p>
            <hr />
            <p className="pt-1">{PriceFormat(shopItem.cost)}</p>
          </div>
          <div className="pt-5 max-h-[70%] overflow-scroll w-full">
            <table className="border border-slate-400 table-auto">
              {props}
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
