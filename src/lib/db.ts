import { drizzle } from "drizzle-orm/libsql";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const db = drizzle(process.env.DB_FILE_NAME!);

export const shopItems = sqliteTable("shop_items", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  cost: integer().notNull(),
  itemType: text({
    enum: ["CPU", "GPU", "Motherboard", "RAM", "HardDrive", "PSU"],
  }).notNull(),
  props: text({ mode: "json" }).notNull(),
  image: text().notNull().default("/placeholder.jpg"),
  quantity: integer().notNull().default(0),
});

export const shopUsers = sqliteTable("shop_users", {
  id: integer().primaryKey({ autoIncrement: true }),
  email: text().notNull(),
  name: text(),
  bio: text(),
  liked: text({ mode: "json" }).notNull().default([]),
});
