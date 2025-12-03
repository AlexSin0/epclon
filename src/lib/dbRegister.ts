import { db, shopUsers } from "@/lib/db";
import ShopUser from "@/types/ShopUser";
import { eq } from "drizzle-orm";
import { User } from "next-auth";

export default async function dbRegister(user: User) {
  if (!user.email) {
    console.error("User has no email!");
    return;
  }

  const users = await db
    .select()
    .from(shopUsers)
    .where(eq(shopUsers.email, user.email));

  if (users.length > 0) {
    console.log(`User ${user.email} already registered`);
    return;
  }

  const newUser = new ShopUser(user.email);
  if (user.name) newUser.name = user.name;

  await db.insert(shopUsers).values(newUser);

  console.log(`Registered user ${user.email} to DB`);
}
