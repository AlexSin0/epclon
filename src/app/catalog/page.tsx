import CatalogItem from "@/components/CatalogItem";
import FilterGroup from "@/components/FilterGroup";
import {
  GetAllFilterProps,
  GetCatalogFiltered,
  GetCatalogSearch,
  SearchParams,
} from "@/lib/Catalog";

export default async function Catalog({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParam = searchParams["search"];
  delete searchParams["search"];

  const catalog = await (searchParam && !Array.isArray(searchParam)
    ? GetCatalogSearch(searchParam as string)
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
          <form className="max-h-[90%] w-full overflow-scroll">
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
          <CatalogItem item={item} key={index} />
        ))}
      </div>
    </main>
  );
}
