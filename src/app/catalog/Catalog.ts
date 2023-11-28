import { ShopItem } from "@/types/ShopItem";

export function TestData(): ShopItem[] {
  const testItem = new ShopItem("Test Name", 100, "CPU", {
    color: "None",
    brand: "Intel",
  });

  const testItem2 = new ShopItem("Test Name", 100, "CPU", {
    color: "Black",
    brand: "AMD",
  });

  const shopItems: ShopItem[] = [];

  for (let i = 0; i < 10; i++) {
    shopItems.push(testItem);
  }

  shopItems[3] = testItem2;
  shopItems[4] = testItem2;

  return shopItems;
}
