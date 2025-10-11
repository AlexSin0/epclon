import { cookies } from "next/headers";
import { db, shopItems, shopUsers } from "@/lib/db";
import { and, eq, gt, inArray, isNotNull, like, or, sql } from "drizzle-orm";
import { ShopItem, ItemType } from "@/types/ShopItem";
import ShopUser from "@/types/ShopUser";

const propsExtract = (prop: string) =>
  sql`json_extract(${shopItems.props}, ${"$." + prop})`;

const searchParamsFilter = (searchParams: SearchParams) =>
  Object.entries(searchParams).map(([k, v]) =>
    Array.isArray(v) ? inArray(propsExtract(k), v) : eq(propsExtract(k), v)
  );

const onlyOne = async (query: Promise<any[]>) => (await query)[0];

export function BasketGet() {
  const basketCookies = cookies().get("basket")?.value;
  return basketCookies ? (JSON.parse(basketCookies) as number[]) : [];
}

export function BasketSet(arr: number[]) {
  return cookies().set("basket", JSON.stringify(arr));
}

export function GetFilterProps(filterName: string) {
  return db
    .selectDistinct({
      value: propsExtract(filterName),
    })
    .from(shopItems)
    .where(isNotNull(propsExtract(filterName)));
}

export function GetAllFilterProps(filterNames: string[]) {
  return Promise.all(
    filterNames.map(async (filterName) =>
      (await GetFilterProps(filterName)).map((x) => x.value as string)
    )
  );
}

export function GetCatalogFull() {
  return db.select().from(shopItems) as Promise<ShopItem[]>;
}

export type SearchParams = { [key: string]: string | string[] | undefined };

export function GetCatalogFiltered(searchParams: SearchParams) {
  return db
    .select()
    .from(shopItems)
    .where(and(...searchParamsFilter(searchParams))) as Promise<ShopItem[]>;
}

export function GetCatalogSearch(searchQuery: string) {
  const search = and(
    ...searchQuery
      .split(" ")
      .map((word) =>
        or(
          like(shopItems.name, `%${word}%`),
          like(shopItems.props, `%${word}%`)
        )
      )
  );

  return db.select().from(shopItems).where(search) as Promise<ShopItem[]>;
}

export async function GetUserLiked(email: string) {
  const user = await GetUser(email);
  return (user.liked ?? []) as number[];
}

export function GetCatalogById(ids: number[]) {
  return db
    .select()
    .from(shopItems)
    .where(inArray(shopItems.id, ids)) as Promise<ShopItem[]>;
}

export function GetCatalogType(type: ItemType) {
  return db
    .select()
    .from(shopItems)
    .where(eq(shopItems.itemType, type)) as Promise<ShopItem[]>;
}

export function GetCatalogTypeFiltered(
  type: ItemType,
  searchParams: SearchParams
) {
  const filter = and(
    eq(shopItems.itemType, type),
    ...searchParamsFilter(searchParams)
  );

  return db.select().from(shopItems).where(filter) as Promise<ShopItem[]>;
}

export function GetShopItem(id: number) {
  return onlyOne(
    db.select().from(shopItems).where(eq(shopItems.id, id)).limit(1)
  ) as Promise<ShopItem>;
}

export function GetBasketItems() {
  return db
    .select()
    .from(shopItems)
    .where(
      and(gt(shopItems.quantity, 0), inArray(shopItems.id, BasketGet()))
    ) as Promise<ShopItem[]>;
}

export function BasketItemsDecrement() {
  const basket = BasketGet();
  cookies().delete("basket");

  return db
    .update(shopItems)
    .set({ quantity: sql`${shopItems.quantity} - 1` })
    .where(and(gt(shopItems.quantity, 0), inArray(shopItems.id, basket)));
}

export function LikedAdd(email: string, id: number) {
  return db
    .update(shopUsers)
    .set({ liked: sql`json_insert(${shopUsers.liked},'$[#]',${id})` })
    .where(eq(shopUsers.email, email));
}

export function LikedRemove(email: string, id: number) {
  return db
    .update(shopUsers)
    .set({
      liked: sql`json_remove(liked, (SELECT fullkey FROM json_each(liked) WHERE value = ${id}))`,
    })
    .where(eq(shopUsers.email, email));
}

export function GetUser(email: string) {
  return onlyOne(
    db.select().from(shopUsers).where(eq(shopUsers.email, email)).limit(1)
  ) as Promise<ShopUser>;
}

export function UpdateProfile(
  email: string,
  set: { name?: string; bio?: string }
) {
  return db.update(shopUsers).set(set);
}
