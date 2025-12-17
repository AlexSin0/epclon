import Checkout from "@/components/payment/Checkout";
import CatalogItem from "@/components/catalog/CatalogItem";
import { GetBasketItems, GetUserLiked } from "@/lib/Catalog";
import { auth } from "@/lib/auth";

export default async function Cart() {
  const session = await auth();
  const email = session?.user?.email;

  const liked = email ? await GetUserLiked(email) : [];

  const catalog = await GetBasketItems();
  const total = catalog.reduce((acc, item) => acc + Number(item.cost), 0);

  return (
    <main className="flex bg-zinc-400 ">
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
        <>
          <div className="p-4 w-full grid grid-cols-4 gap-4">
            {catalog.map((item, index) => (
              <CatalogItem
                item={item}
                key={index}
                isLiked={email ? liked.includes(item.id) : null}
                isInBasket={true}
              />
            ))}
          </div>
          <div className="w-[30%] text-white text-lg text-center min-h-[10vh] sticky top-[40vh]">
            <Checkout amount={total} />
          </div>
        </>
      )}
    </main>
  );
}
