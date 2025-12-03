"use server";

import { BasketItemsDecrement } from "./Catalog";

export async function Purchase(email: string) {
  console.log("Successful purchase by " + email);
  await BasketItemsDecrement();

  // TODO: Notification via email
}
