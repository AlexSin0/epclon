import { BasketGet, BasketSet } from "@/lib/Catalog";
import { revalidatePath } from "next/cache";

const IN_BASKET = "To cart";
const NOT_IN_BASKET = "Out of cart";

export default function BasketButton({
  id,
  isInBasket,
}: {
  id: number;
  isInBasket: boolean;
}) {
  return (
    <form className="flex-grow max-w-[300px]" action={basketHandler}>
      <input
        className={`rounded-lg border-sky-500 border-4 p-1 cursor-pointer w-full bg-sky-600 ${
          isInBasket ? "" : "bg-opacity-10"
        }`}
        type="submit"
        name={id.toString()}
        value={isInBasket ? NOT_IN_BASKET : IN_BASKET}
      />
    </form>
  );
}

async function basketHandler(formData: FormData) {
  "use server";

  for (const [key, val] of formData.entries()) {
    if (val === IN_BASKET) {
      const basket = BasketGet();
      basket.push(Number(key));
      BasketSet(basket);
      break;
    }

    if (val === NOT_IN_BASKET) {
      const basket = BasketGet();
      basket.splice(basket.indexOf(Number(key)), 1);
      BasketSet(basket);
      break;
    }
  }

  revalidatePath("");
}
