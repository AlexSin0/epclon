import { ShopItem } from "@/types/ShopItem";
import Image from "next/image";

export default function CatalogItem({ item }: { item: ShopItem }) {
  return (
    <div className="bg-slate-600 p-4 text-white text-lg hover:outline hover:bg-[#667799] rounded">
      <Image
        src={item.image}
        alt={`${item.name} image`}
        width={200}
        height={200}
        className="mb-4 w-full aspect-square object-cover m-auto rounded"
      />
      <p className="flex justify-center">{item.name}</p>
      <p className="flex justify-center">{item.cost.toFixed(2)}₴</p>
    </div>
  );
}
