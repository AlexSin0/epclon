import BasketButton from "@/components/catalog/BasketButton";
import LikeButton from "@/components/catalog/LikeButton";
import { BasketGet, GetShopItem, GetUserLiked } from "@/lib/Catalog";
import Image from "next/image";
import { auth } from "@/lib/auth";

export default async function Product(props0: {
  searchParams: Promise<{ id: string }>;
}) {
  const searchParams = await props0.searchParams;
  if (!searchParams || !searchParams.id) {
    return <p>Error. Item not found</p>;
  }

  const itemId = Number(searchParams.id);
  const shopItem = await GetShopItem(itemId);

  let props = [];
  for (const key in shopItem.props) {
    const val = (shopItem.props as any)[key];

    props.push(
      <tr key={key}>
        <td className="border border-slate-400 px-1.5 py-1">
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </td>
        <td className="border border-slate-400 px-1.5 py-1">{val}</td>
      </tr>
    );
  }

  const session = await auth();
  const email = session?.user?.email;
  const isLogged = !!email;

  const liked = email ? await GetUserLiked(email) : [];
  const basket = BasketGet();

  return (
    <main className="bg-slate-500 text-white max-h-[30vh]">
      <div className="p-1 flex w-full h-[80vh]">
        <Image
          src={shopItem.image}
          alt={`${shopItem.name} image`}
          className=" object-contain min-w-[30%] w-full rounded-lg"
          width={900}
          height={900}
        />
        <div className="text-lg text-white p-2 w-full h-full">
          <div>
            <p className="text-xl break-words">{shopItem.name}</p>
            <hr />
            <p className="pt-1">
              Price:
              <span className="underline pl-1">
                {`${Number(shopItem.cost).toFixed(2)}₴`}
              </span>
            </p>
            <div className="flex gap-3 my-2">
              {isLogged ?? (
                <LikeButton id={itemId} isLiked={liked.includes(itemId)} />
              )}
              {shopItem.quantity < 1 ? (
                <p className="p-1 border-4 border-transparent text-center text-white max-w-[200px]:">
                  Out of stock
                </p>
              ) : (
                <BasketButton
                  id={itemId}
                  isInBasket={basket.includes(itemId)}
                />
              )}
            </div>
          </div>
          <div className="pt-5 max-h-[70%] overflow-auto w-full static">
            <p>Product characteristics:</p>
            <table className="bg-[#596273] w-full min-w-[50%] table-auto">
              <tbody>
                <tr className="bg-[#4c5467]">
                  <th className="border border-slate-400 ">Characteristic</th>
                  <th className="border border-slate-400">Value</th>
                </tr>
                {props}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
