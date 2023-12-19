import { getServerSession } from "next-auth";
import { cookies } from "next/headers";

import ItemTypeButton from "@/components/catalog/ItemTypeButtom";
import CatalogItem from "@/components/catalog/CatalogItem";
import FilterGroup from "@/components/catalog/FilterGroup";
import {
  GetAllFilterProps,
  GetUserLiked,
  SearchParams,
  GetCatalogTypeFiltered,
} from "@/lib/Catalog";
import { ItemType } from "@/types/ShopItem";

export default async function Catalog({
  searchParams,
  params,
}: {
  searchParams: SearchParams;
  params: { product: string };
}) {
  const session = await getServerSession();
  const email = session?.user?.email;

  const liked = email ? await GetUserLiked(email) : [];
  const likedStr = liked.map((x) => x.toString());

  let catalog: any[] = [];
  let filterNames: string[] = [];
  try {
    let productType: ItemType | undefined;

    switch (params.product) {
      case "cpu":
        productType = "CPU";
        filterNames = [
          "socket",
          "model",
          "threadCount",
          "coreCount",
          "clockspeed_GHz",
          "powerUsage_W",
        ];
        break;
      case "gpu":
        productType = "GPU";
        filterNames = ["brand", "memory"];
        break;
      case "ram":
        productType = "RAM";
        filterNames = ["brand", "memory"];
        break;
      case "hd":
        productType = "HardDrive";
        filterNames = ["brand", "capacity"];
        break;
      case "mb":
        productType = "Motherboard";
        filterNames = ["brand", "socket"];
        break;
      case "psu":
        productType = "PSU";
        filterNames = ["brand", "power"];
        break;
    }

    filterNames.push(...["color", "brand"]);

    catalog = await GetCatalogTypeFiltered(productType!, searchParams);
  } catch (err) {
    console.log(err);
  }

  const filterProps = await GetAllFilterProps(filterNames);

  const basket = cookies().get("basket")?.value;
  const basketArr: string[] = basket ? JSON.parse(basket) : [];

  return (
    <main className="flex bg-zinc-400">
      <div className="flex">
        <div className="bg-slate-600 h-screen min-w-[300px] p-2 text-white text-lg sticky top-0">
          <p className="text-2xl items-center justify-center flex">
            Filtration
          </p>
          <hr />
          <form className="max-h-[82vh] w-full overflow-auto">
            <button
              type="submit"
              className="bg-[#21ad9a] p-2 my-4 rounded-xl w-full static"
            >
              Apply
            </button>
            {filterNames.map((prop, index) => (
              <FilterGroup
                name={prop}
                filterSet={filterProps[index]}
                key={index}
              />
            ))}
          </form>
        </div>
      </div>
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
              isLiked={email ? likedStr.includes(item._id.toString()) : null}
              isInBasket={basketArr.includes(item._id.toString())}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
