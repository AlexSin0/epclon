import CatalogItem from "@/components/CatalogItem";
import FilterGroup from "@/components/FilterGroup";
import {
  GetAllFilterProps,
  GetCatalogFiltered,
  GetCatalogLiked,
  GetCatalogSearch,
  GetUserLiked,
  SearchParams,
} from "@/lib/Catalog";
import { ObjectId, WithId } from "mongodb";
import { getServerSession } from "next-auth";

export default async function Catalog({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const session = await getServerSession();
  const email = session?.user?.email;
  const liked: ObjectId[] = email ? await GetUserLiked(email) : [];

  const likedStr = liked.map((x) => x.toString());

  const searchParam = searchParams["search"];
  delete searchParams["search"];

  const likedParam = searchParams["liked"];

  const catalog = await (searchParam && !Array.isArray(searchParam)
    ? GetCatalogSearch(searchParam as string)
    : likedParam === ""
    ? GetCatalogLiked(liked)
    : GetCatalogFiltered(searchParams));

  const filterNames = ["color", "brand"];
  const filterProps = await GetAllFilterProps(filterNames);

  return (
    <main className="bg-slate-500 flex ">
      <div className="flex">
        <div className="bg-slate-600 h-screen min-w-[300px] p-2 text-white text-lg sticky top-0 relatives">
          <p className="text-2xl items-center justify-center flex">
            Filtration
          </p>
          <hr />
          <form className="max-h-[82vh] w-full overflow-auto">
            {filterNames.map((prop, index) => (
              <FilterGroup
                name={prop}
                filterSet={filterProps[index]}
                key={index}
              />
            ))}
            <button
              type="submit"
              className="bg-[#21ad9a] p-1 mb-2 rounded-xl w-full static"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
      <div className="p-4 pl-10 w-full grid grid-cols-4 gap-4">
        {catalog.map((item, index) => (
          <CatalogItem
            item={item}
            key={index}
            isLiked={session ? likedStr.includes(item._id.toString()) : null}
          />
        ))}
      </div>
    </main>
  );
}
