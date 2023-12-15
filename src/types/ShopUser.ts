import { ObjectId } from "mongodb";

export default class ShopUser {
  constructor(public email: string) {}

  public name?: string;
  public bio?: string;

  public liked?: ObjectId[];
}
