import { ShopItem } from "@/types/ShopItem";
import Image from "next/image";

export default function CatalogItem({ item }: { item: ShopItem }) {
  return (
    <div className="bg-slate-600 p-4 text-white text-lg">
      <Image
        src={item.image}
        alt={`${item.name} image`}
        width={200}
        height={200}
        className="mb-4 w-full aspect-square object-cover m-auto"
      />
      <p>{item.name}</p>
      <p>{item.cost.toFixed(2)}₴</p>
    </div>
  );
}
