import { Collection, Document } from "mongodb";

export default async function DataTable({
  caption,
  collection,
  addHandle,
  delHandle,
  editHandle,
}: {
  caption: string;
  collection: Collection<Document>;
  addHandle: (formData: FormData) => void;
  delHandle: (formData: FormData) => void;
  editHandle: (formData: FormData) => void;
}) {
  const data = await collection.find().toArray();

  const val = data[0];
  const keys = (
    Object.getOwnPropertyNames(val).filter(
      (x) => x !== "_id"
    ) as (keyof Document)[]
  ).map((x) => x.toString());

  return (
    <div className="">
      <p>{formatString(caption)}</p>
      {/* Headers */}
      <div className={`grid grid-cols-${keys.length + 1}`}>
        {keys.map((k, i) => (
          <div key={i} className="border-[3px] p-2">
            {formatString(k.toString())}
          </div>
        ))}
      </div>
      {/* Data */}
      {data.map((x, i) => (
        <div className="flex" key={i}>
          <form action={editHandle} className="flex">
            <div className={`grid grid-cols-${keys.length}`}>
              {keys.map((k) => (
                <input
                  className="border p-2 max-w-xl bg-gray-600"
                  key={k}
                  name={k}
                  placeholder={k}
                  type={
                    x[k] instanceof Date
                      ? "date"
                      : typeof val[k] === "number"
                      ? "number"
                      : "text"
                  }
                  defaultValue={
                    typeof x[k] === "object" ? JSON.stringify(x[k]) : x[k]
                  }
                />
              ))}
            </div>
            <input
              type="submit"
              className="bg-emerald-600 text-white h-10 p-2 my-1 border hover:underline cursor-pointer"
              value="Edit"
              readOnly
              name={x._id.toString()}
            />
            <input
              type="Reset"
              className="bg-orange-600 text-white h-10 p-2 my-1 border hover:underline cursor-pointer"
              value="Reset"
              readOnly
            />
          </form>
          <form action={delHandle}>
            <input
              type="submit"
              className="bg-red-600 text-white h-10 p-2 my-1 border hover:underline cursor-pointer"
              value="Delete"
              name={x._id.toString()}
              readOnly
            />
          </form>
        </div>
      ))}
      {/* Add */}
      <form action={addHandle} className={`grid grid-cols-${keys.length + 1}`}>
        {keys.map((k, i) => (
          <input
            className="border p-2 max-w-xl bg-gray-600"
            type={
              val[k] instanceof Date
                ? "date"
                : typeof val[k] === "number"
                ? "number"
                : "text"
            }
            name={k}
            placeholder={k}
            key={k}
            required
          />
        ))}
        <button
          className="bg-cyan-700 text-white h-10 p-2 my-1 border hover:underline cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${formattedDay}.${formattedMonth}.${year}`;
}

function formatString(input: string): string {
  const words = input.split(/(?=[A-Z])/);

  const formattedString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedString;
}
