import CatalogItem from "@/components/CatalogItem";
import FilterGroup from "@/components/FilterGroup";
import { GetAllFilterProps, GetCatalogFiltered, SearchParams } from "./Catalog";

export default async function Catalog({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const catalog = await GetCatalogFiltered(searchParams);

  const filterNames = ["color", "brand"];
  const filterProps = await GetAllFilterProps(filterNames);

  return (
    <main className="bg-slate-500 flex ">
      <div className="flex">
        <div className=" bg-slate-600 h-screen min-w-[300px] p-4 text-white text-lg sticky top-0">
          <p className="text-2xl items-center justify-center flex">
            Filtration
          </p>
          <hr />
          <form>
            {filterNames.map((prop, index) => (
              <FilterGroup
                name={prop}
                filterSet={filterProps[index]}
                key={index}
              />
            ))}
            <button
              type="submit"
              className="bg-[#21ad9a] p-2 rounded-xl w-full"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
      <div className="p-4 pl-10 grid grid-cols-4 gap-4 items-center">
        {catalog.map((item, index) => (
          <CatalogItem item={item} key={index} />
        ))}
      </div>
    </main>
  );
}
