import { ShopItem } from "@/types/ShopItem";

export function TestData(): ShopItem[] {
  const testItem = new ShopItem("Test Name", 100, "cpu", {
    color: "none",
    brand: "intel",
  });

  const testItem2 = new ShopItem("Test Name", 100, "cpu", {
    color: "black",
    brand: "amd",
  });

  const shopItems: ShopItem[] = [];

  for (let i = 0; i < 10; i++) {
    shopItems.push(testItem);
  }

  shopItems[3] = testItem2;
  shopItems[4] = testItem2;

  return shopItems;
}
