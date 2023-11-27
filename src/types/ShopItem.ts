import { ItemProps } from "./ItemProps";

export type ItemType =
  | "cpu"
  | "gpu"
  | "motherboard"
  | "ram"
  | "hard-drive"
  | "psu";

export class ShopItem {
  constructor(
    public name: string,
    public cost: number,
    public itemType: ItemType,
    public props: ItemProps,
    public image: string = "/placeholder.jpg",
    public quantity: number = 0
  ) {}
}
