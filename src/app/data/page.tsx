import DataTable from "@/components/DataTable";
import { shopItemCollection } from "@/lib/MongoConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export default async function CRUD() {
  const session = await getServerSession();

  if (!session) {
    return <p>Access not granted</p>;
  }

  return (
    <main className="bg-slate-900 text-gray-300">
      <DataTable
        caption="shopItems"
        collection={shopItemCollection}
        addHandle={formHandle}
        delHandle={delHandle}
        editHandle={editHandle}
      />
    </main>
  );
}

async function editHandle(formData: FormData) {
  "use server";

  let idStr: string = "";
  let obj: any = {};
  formData.forEach((v, k) => {
    if (v) {
      if (v === "Edit") idStr = k;
      else obj[k] = v;
    }
  });

  obj.props = JSON.parse(obj.props);
  obj.cost = JSON.parse(obj.cost);
  obj.quantity = JSON.parse(obj.quantity);

  try {
    const oId = new ObjectId(idStr);
    console.log(obj);
    console.log(idStr);

    await shopItemCollection.replaceOne({ _id: oId }, obj);

    revalidatePath("");
  } catch {}
}

async function formHandle(formData: FormData) {
  "use server";

  let obj: any = {};
  formData.forEach((v, k) => (v ? (obj[k] = v) : ""));

  await shopItemCollection.insertOne(obj);

  revalidatePath("");
}

async function delHandle(formData: FormData) {
  "use server";

  let idStr: string = "";
  formData.forEach((v, k) => (v ? (idStr = k) : ""));

  try {
    const oId = new ObjectId(idStr);
    await shopItemCollection.deleteOne({ _id: oId });

    revalidatePath("");
  } catch {}
}
