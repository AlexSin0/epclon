import { auth } from "@/lib/auth";
import ItemTypeButton from "@/components/catalog/ItemTypeButton";
import CatalogItem from "@/components/catalog/CatalogItem";
import {
  GetCatalogFiltered,
  GetCatalogById,
  GetCatalogSearch,
  GetUserLiked,
  SearchParams,
  BasketGet,
} from "@/lib/Catalog";
import Filters from "@/components/catalog/Filters";

export default async function Catalog(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const session = await auth();
  const email = session?.user?.email;

  const liked = email ? await GetUserLiked(email) : [];
  const basket = BasketGet();

  const likedParam = searchParams["liked"];
  const searchParam = searchParams["search"];

  let catalog;
  if (likedParam === "") {
    catalog = await GetCatalogById(liked);
  } else if (searchParam && !Array.isArray(searchParam)) {
    catalog = await GetCatalogSearch(searchParam);
  } else {
    catalog ??= await GetCatalogFiltered(searchParams);
  }

  return (
    <main className="flex bg-zinc-400">
      <Filters />
      <div className="w-full">
        <div className="bg-slate-600 h-[40px] w-full sticky top-0 grid grid-cols-6">
          <ItemTypeButton productType="cpu">CPUs</ItemTypeButton>
          <ItemTypeButton productType="gpu">GPUs</ItemTypeButton>
          <ItemTypeButton productType="ram">RAM</ItemTypeButton>
          <ItemTypeButton productType="hd">HardDrives</ItemTypeButton>
          <ItemTypeButton productType="mb">Motherboards</ItemTypeButton>
          <ItemTypeButton productType="psu">PSUs</ItemTypeButton>
        </div>
        <div className="p-4 w-full grid grid-cols-4 gap-4">
          {catalog.map((item, index) => (
            <CatalogItem
              item={item}
              key={index}
              isLiked={email ? liked.includes(item.id) : null}
              isInBasket={basket.includes(item.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
