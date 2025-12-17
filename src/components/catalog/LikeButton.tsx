import { LikedAdd, LikedRemove } from "@/lib/Catalog";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";

const LIKE = "❤️";
const UNLIKE = "🤍";

export default function LikeButton({
  id,
  isLiked,
}: {
  id: number;
  isLiked: boolean;
}) {
  return (
    <form className="" action={likeHandler}>
      <input
        className={`rounded-lg border-rose-500 border-4 p-1 aspect-square cursor-pointer bg-rose-500 ${
          isLiked ? "" : "bg-opacity-10"
        }`}
        type="submit"
        name={id.toString()}
        value={isLiked ? UNLIKE : LIKE}
      />
    </form>
  );
}

async function likeHandler(formData: FormData) {
  "use server";

  const session = await auth();

  if (!session?.user?.email) return;
  const email = session.user.email;

  for (const [key, val] of formData.entries()) {
    if (val === LIKE) {
      await LikedAdd(email, Number(key));
      break;
    }

    if (val === UNLIKE) {
      await LikedRemove(email, Number(key));
      break;
    }
  }

  revalidatePath("");
}
