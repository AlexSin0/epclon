import { ItemProps } from "./ItemProps";

export type ItemType =
  | "CPU"
  | "GPU"
  | "Motherboard"
  | "RAM"
  | "HardDrive"
  | "PSU";

export class ShopItem {
  constructor(
    public id: number,
    public name: string,
    public cost: number,
    public itemType: ItemType,
    public props: ItemProps,
    public image: string = "/placeholder.jpg",
    public quantity: number = 0
  ) {}
}
