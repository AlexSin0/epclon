import CatalogItem from "@/components/CatalogItem";
import FilterGroup from "@/components/FilterGroup";
import { GetCatalogFiltered, GetCatalogFull, TestData } from "./Catalog";

export default async function Catalog({
  searchParams,
}: {
  searchParams: Map<string, string | string[]>;
}) {
  const shopItems = await GetCatalogFull();
  const catalog = await GetCatalogFiltered(searchParams);
  const filterNames = ["color", "brand"];

  return (
    <main className="bg-slate-500">
      <div className="absolute w-[20%] bg-slate-600 h-full p-4 text-white text-lg">
        Filters
        <form>
          <ul>
            <li>
              <button
                type="submit"
                className="bg-[#21ad9a] p-2 rounded-xl w-full"
              >
                Apply
              </button>
            </li>
            {filterNames.map((prop) => (
              <li>
                <FilterGroup
                  name={prop}
                  filterSet={
                    new Set(shopItems.map((item) => (item.props as any)[prop]))
                  }
                />
              </li>
            ))}
          </ul>
        </form>
      </div>
      <div className="ml-[20%] p-4 grid grid-cols-4 gap-4">
        {catalog.map((item) => (
          <CatalogItem item={item} />
        ))}
      </div>
    </main>
  );
}
