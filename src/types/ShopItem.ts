import { ItemProps } from "./ItemProps";

export type ItemType =
  | "CPU"
  | "GPU"
  | "Motherboard"
  | "RAM"
  | "Hard Drive"
  | "PSU";

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
