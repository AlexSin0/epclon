import { CpuProps } from "@/types/ItemProps";
import { ShopItem } from "@/types/ShopItem";

import { shopItemCollection, userCollection } from "@/lib/MongoConnect";
import { WithId, Filter, Document, ObjectId } from "mongodb";

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

export function GetCatalogFull(): Promise<WithId<ShopItem>[]> {
  return shopItemCollection.find().toArray() as Promise<WithId<ShopItem>[]>;
}

export type SearchParams = { [key: string]: string | string[] | undefined };

export function GetCatalogFiltered(searchParams: SearchParams) {
  const mongoFilter = ToMongoFilter(searchParams);

  const query = shopItemCollection.find(mongoFilter);

  return query.toArray() as Promise<WithId<ShopItem>[]>;
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

export function GetCatalogSearch(searchQuery: string) {
  const query = shopItemCollection.aggregate([
    {
      $search: {
        index: "searchIndex",
        text: {
          query: searchQuery,
          path: {
            wildcard: "*",
          },
        },
      },
    },
  ]);

  return query.toArray() as Promise<WithId<ShopItem>[]>;
}

export async function GetUserLiked(email: string): Promise<ObjectId[]> {
  const user = await userCollection.findOne({
    email: email,
  });

  return user?.liked ?? [];
}

export function GetCatalogById(liked: ObjectId[]) {
  return shopItemCollection.find({ _id: { $in: liked } }).toArray() as Promise<
    WithId<ShopItem>[]
  >;
}

export function GetShopItem(id: ObjectId) {
  return shopItemCollection.findOne({ _id: id }) as Promise<WithId<ShopItem>>;
}

export function PriceFormat(cost: number) {
  return `${cost.toFixed(2)}₴`;
}
