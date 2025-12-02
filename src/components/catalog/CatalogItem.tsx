import Image from "next/image";
import Link from "next/link";

import BasketButton from "./BasketButton";
import LikeButton from "./LikeButton";
import { ShopItem } from "@/types/ShopItem";

export default function CatalogItem({
  item,
  isLiked,
  isInBasket,
}: {
  item: ShopItem;
  isLiked: boolean | null;
  isInBasket: boolean;
}) {
  const outOfStock = item.quantity < 1;

  return (
    <div
      className={
        (outOfStock ? "bg-slate-800 text-neutral-400" : "bg-slate-600") +
        " p-4 text-white text-lg hover:outline hover:bg-slate-500 rounded-md max-w-xs h-fit"
      }
    >
      <Link href={`/product?id=${item.id}`}>
        <div className="mb-4 aspect-w-1 aspect-h-1">
          <Image
            src={item.image}
            alt={`${item.name} image`}
            width={200}
            height={200}
            className="aspect-square object-cover m-auto rounded-md"
          />
        </div>
        <p className="flex justify-center overflow-hidden">
          <span className="truncate">{item.name}</span>
        </p>
        <p className="text-center">{`${Number(item.cost).toFixed(2)}₴`}</p>
      </Link>
      <div className="flex gap-2 my-1">
        {outOfStock ? (
          <p className="p-1 border-4 w-full border-transparent text-center text-white">
            Out of stock
          </p>
        ) : (
          <BasketButton id={item.id} isInBasket={isInBasket} />
        )}
        {isLiked !== null && <LikeButton id={item.id} isLiked={isLiked} />}
      </div>
      <p className="text-sm text-center">{item.quantity} left</p>
    </div>
  );
}
