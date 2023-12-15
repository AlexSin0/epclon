import { userCollection } from "@/lib/MongoConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

const LIKE = "❤️";
const UNLIKE = "🤍";

export default function LikeButton({
  id,
  isLiked,
}: {
  id: ObjectId;
  isLiked: boolean;
}) {
  return (
    <form className="" action={likeHandler}>
      <input
        className={`rounded-lg border-pink-500 border-4 m-1 p-1 cursor-pointer ${
          isLiked ? "bg-pink-500" : ""
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

  const session = await getServerSession();

  if (!session?.user?.email) return;
  const email = session.user.email;

  for (const [key, val] of formData.entries()) {
    if (val === LIKE) {
      await userCollection.updateOne(
        { email: email },
        { $push: { liked: new ObjectId(key) } }
      );
      break;
    }

    if (val === UNLIKE) {
      await userCollection.updateOne(
        { email: email },
        { $pull: { liked: new ObjectId(key) } }
      );
      break;
    }
  }

  revalidatePath("");
}
