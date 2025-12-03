import { auth } from "@/lib/auth";
import ItemTypeButton from "@/components/catalog/ItemTypeButton";
import CatalogItem from "@/components/catalog/CatalogItem";
import {
  GetUserLiked,
  SearchParams,
  GetCatalogTypeFiltered,
  BasketGet,
} from "@/lib/Catalog";
import { ItemType } from "@/types/ShopItem";
import Filters from "@/components/catalog/Filters";

export default async function Catalog(props: {
  searchParams: Promise<SearchParams>;
  params: Promise<{ product: string }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const session = await auth();
  const email = session?.user?.email;

  const liked = email ? await GetUserLiked(email) : [];

  let productType: ItemType | undefined;
  switch (params.product) {
    case "cpu":
    case "gpu":
    case "ram":
    case "psu":
      productType = params.product.toUpperCase() as ItemType;
      break;
    case "hd":
      productType = "HardDrive";
      break;
    case "mb":
      productType = "Motherboard";
      break;
    default:
      break;
  }

  const catalog = await GetCatalogTypeFiltered(productType!, searchParams);
  const basket = BasketGet();

  return (
    <main className="flex bg-zinc-400">
      <Filters productType={params.product} />
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
