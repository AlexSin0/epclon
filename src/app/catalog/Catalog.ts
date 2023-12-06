import { CpuProps } from "@/types/ItemProps";
import { ShopItem } from "@/types/ShopItem";

import { shopItemCollection } from "@/lib/MongoConnect";
import { WithId, Filter, Document } from "mongodb";

export async function TestData(): Promise<ShopItem[]> {
  const testItem = new ShopItem("Test Name", 100, "CPU", {
    color: "None",
    brand: "Intel",
  });

  const testItem2 = new ShopItem("Test Name", 100, "CPU", {
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

  for (let i = 0; i < 10; i++) {
    shopItems.push(testItem);
  }

  shopItems[0] = testCpu;

  shopItems[1] = testItem2;
  shopItems[2] = testItem2;

  return shopItems;
}

export async function GetCatalogFull(): Promise<WithId<ShopItem>[]> {
  const query = await shopItemCollection.find().toArray();
  return query as WithId<ShopItem>[];
}

export async function GetCatalogFiltered(
  searchParams: Map<string, string | string[]>
) {
  const mongoFilter = ToMongoFilter(searchParams);
  const query = await shopItemCollection.find(mongoFilter);

  const array = await query.toArray();

  return array as WithId<ShopItem>[];
}

function ToMongoFilter(searchParams: Map<string, string | string[]>) {
  const mongoFilter: Filter<Document> = {};

  //Is not instance of Map!!!
  console.log(searchParams instanceof Map);

  searchParams.forEach((v, k) => {
    if (Array.isArray(v)) {
      mongoFilter[`props.${k}`] = { $in: v };
    } else {
      mongoFilter[`props.${k}`] = v;
    }
  });

  return mongoFilter;
}
