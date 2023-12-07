import { ShopItem } from "@/types/ShopItem";
import Image from "next/image";

export default function CatalogItem({ item }: { item: ShopItem }) {
  return (    
    <div className="bg-slate-600 h-full p-4 text-white text-lg hover:outline hover:bg-[#667799] rounded max-w-xs">
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
      <p className="flex justify-center">{item.cost.toFixed(2)}₴</p>
    </div>
  );
}
