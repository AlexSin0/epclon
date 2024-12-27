import ShopItem, { ItemType } from "@/types/ShopItem";

import { shopItemCollection, userCollection } from "@/lib/MongoConnect";
import { WithId, Filter, Document, ObjectId } from "mongodb";
import { cookies } from "next/headers";

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

export function GetCatalogType(type: ItemType) {
	return shopItemCollection.find({ itemType: type }).toArray();
}

export function GetCatalogTypeFiltered(
	type: ItemType,
	searchParams: SearchParams
) {
	const mongoFilter = ToMongoFilter(searchParams);

	mongoFilter["itemType"] = type;

	const query = shopItemCollection.find(mongoFilter);

	return query.toArray() as Promise<WithId<ShopItem>[]>;
}

export function GetShopItem(id: ObjectId) {
	return shopItemCollection.findOne({ _id: id }) as Promise<WithId<ShopItem>>;
}

export function GetBasketItemIds() {
	const basket = cookies().get("basket")?.value;
	const basketArr: string[] = basket ? JSON.parse(basket) : [];

	const basketIds: ObjectId[] = [];
	basketArr.forEach((item) => {
		try {
			basketIds.push(new ObjectId(item));
		} catch {}
	});

	return basketIds;
}

export async function GetBasketItems() {
	const basketIds = GetBasketItemIds();

	const catalogRaw = await GetCatalogById(basketIds);
	const catalog = catalogRaw.filter((item) => item.quantity >= 1);

	return catalog;
}

export function BasketItemsDecrement() {
	const basketIds = GetBasketItemIds();
	cookies().delete("basket");

	return shopItemCollection.updateMany(
		{ _id: { $in: basketIds } },
		{ $inc: { quantity: -1 } }
	);
}
