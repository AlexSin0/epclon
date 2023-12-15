import { PriceFormat } from "@/lib/Catalog";
import { ShopItem } from "@/types/ShopItem";
import Image from "next/image";
import Link from "next/link";
import { WithId } from "mongodb";
import LikeButton from "./LikeButton";

export default function CatalogItem({
  item,
  isLiked,
}: {
  item: WithId<ShopItem>;
  isLiked: boolean | null;
}) {
  return (
    <div className="bg-slate-600 h-full p-4 text-white text-lg hover:outline hover:bg-[#667799] rounded max-w-xs max-h-[320px]">
      <Link href={`/product?id=${item._id}`}>
        <div className="mb-4 aspect-w-1 aspect-h-1">
          <Image
            src={item.image}
            alt={`${item.name} image`}
            width={200}
            height={200}
            className="max-w-full aspect-square object-cover m-auto rounded"
          />
        </div>
        <p className="flex justify-center overflow-hidden">
          <span className="truncate">{item.name}</span>
        </p>
      </Link>
      <div className="flex justify-between">
        <p className="">{PriceFormat(item.cost)}</p>
        {isLiked !== null && <LikeButton id={item._id} isLiked={isLiked} />}
      </div>
    </div>
  );
}
