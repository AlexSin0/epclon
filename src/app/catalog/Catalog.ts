import { CpuProps } from "@/types/ItemProps";
import { ShopItem } from "@/types/ShopItem";

import { shopItemCollection } from "@/lib/MongoConnect";
import { WithId, Filter, Document } from "mongodb";

export async function TestData(): Promise<ShopItem[]> {
  const testItem = new ShopItem("Test Name1", 100, "CPU", {
    color: "None",
    brand: "Intel",
  });

  const testItem2 = new ShopItem("Test Name2", 100, "CPU", {
    color: "Black",
    brand: "AMD",
  });

  const testCpu = new ShopItem("Intel Core i5-3570", 1100, "CPU", {
    brand: "Intel",
    clockspeed_GHz: 3.4,
    color: "None",
    coreCount: 4,
    threadCount: 4,
    model: "i5-3570",
    powerUsage_W: 77,
    socket: "LGA 1155",
  } as CpuProps);

  const shopItems: ShopItem[] = [];

  for (let i = 0; i < 30; i++) {
    shopItems.push(testItem);
  }

  shopItems[0] = testCpu;

  shopItems[1] = testItem2;
  shopItems[2] = testItem2;

  return shopItems;
}

export function GetFilterProps(filterName: string) {
  return shopItemCollection.distinct(`props.${filterName}`);
}

export function GetAllFilterProps(filterNames: string[]) {
  return Promise.all(
    filterNames.map((filterName) => GetFilterProps(filterName))
  );
}

export async function GetCatalogFull(): Promise<WithId<ShopItem>[]> {
  const query = await shopItemCollection.find().toArray();
  return query as WithId<ShopItem>[];
}

export type SearchParams = { [key: string]: string | string[] | undefined };

export async function GetCatalogFiltered(searchParams: SearchParams) {
  const mongoFilter = ToMongoFilter(searchParams);

  const query = await shopItemCollection.find(mongoFilter);
  const array = await query.toArray();

  return array as WithId<ShopItem>[];
}

function ToMongoFilter(searchParams: SearchParams) {
  const mongoFilter: Filter<Document> = {};

  for (const key in searchParams) {
    const val = searchParams[key];

    if (Array.isArray(val)) {
      mongoFilter[`props.${key}`] = { $in: val };
    } else {
      mongoFilter[`props.${key}`] = val;
    }
  }

  return mongoFilter;
}
