import CatalogItem from "@/components/catalog/CatalogItem";
import { GetCatalogById, GetUserLiked } from "@/lib/Catalog";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

export default async function Cart() {
  const session = await getServerSession();
  const email = session?.user?.email;

  const liked = email ? await GetUserLiked(email) : [];
  const likedStr = liked.map((x) => x.toString());

  const basket = cookies().get("basket")?.value;
  const basketArr: string[] = basket ? JSON.parse(basket) : [];

  const basketIds: ObjectId[] = [];
  basketArr.forEach((item) => {
    try {
      basketIds.push(new ObjectId(item));
    } catch {}
  });

  const catalog = await GetCatalogById(basketIds);

  return (
    <main className="flex bg-zinc-400 ">
      <div className="p-4 px-12 w-full grid grid-cols-5 gap-4">
        {catalog.length === 0 ? (
          <p
            className="
          text-white text-lg text-center py-5
          bg-slate-600 rounded h-[10vh] w-[25vh]
          absolute left-[45vw] top-[40vh]
          "
          >
            Cart is empty
          </p>
        ) : (
          catalog.map((item, index) => (
            <CatalogItem
              item={item}
              key={index}
              isLiked={email ? likedStr.includes(item._id.toString()) : null}
              isInBasket={basketArr.includes(item._id.toString())}
            />
          ))
        )}
      </div>
      <div className="w-[20vw] border">
        <div
          className="
          text-white text-lg text-center
          bg-slate-600 rounded-xl min-h-[10vh] w-[15vw]
          sticky  top-[40vh]
          "
        >
          <p>Total: TOTAL$</p>
          <p>itemCount?</p>
          <button className="bg-[#21ad9a] py-1 m-1 w-[80%] rounded-xl static">
            Buy
          </button>
        </div>
      </div>
    </main>
  );
}
