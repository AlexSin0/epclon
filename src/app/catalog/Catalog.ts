import { ShopItem } from "@/types/ShopItem";

export function TestData(): ShopItem[] {
  const testItem = new ShopItem("Test Name1", 100, "CPU", {
    Color: "None",
    Brand: "Intel",
  });

  const testItem2 = new ShopItem("Test Name2", 100, "CPU", {
    Color: "Black",
    Brand: "AMD",
  });

  const shopItems: ShopItem[] = [];

  for (let i = 0; i < 30; i++) {
    shopItems.push(testItem);
  }

  shopItems[3] = testItem2;
  shopItems[4] = testItem2;

  return shopItems;
}
