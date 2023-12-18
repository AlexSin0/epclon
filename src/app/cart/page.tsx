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
        {catalog.map((item, index) => (
          <CatalogItem
            item={item}
            key={index}
            isLiked={email ? likedStr.includes(item._id.toString()) : null}
            isInBasket={basketArr.includes(item._id.toString())}
          />
        ))}
      </div>
    </main>
  );
}
