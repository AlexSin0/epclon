import { ItemProps } from "./ItemProps";

export type ItemType = "cpu" | "gpu" | "motherboard" | "ram" | "hard-drive";

export class ShopItem {
  constructor(
    public name: string,
    public cost: number,
    public itemType: ItemType,
    public props: ItemProps,
    public quantity: number = 0
  ) {}
}
