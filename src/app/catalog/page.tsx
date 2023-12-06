import CatalogItem from "@/components/CatalogItem";
import FilterGroup from "@/components/FilterGroup";
import { TestData } from "./Catalog";

export default function Catalog() {
  const shopItems = TestData();
  const filterNames = ["Color", "Brand"];

  return (
    <main className="bg-slate-500 flex ">
      <div className="flex">
        <div className=" bg-slate-600 h-screen min-w-[300px] p-4 text-white text-lg sticky top-0">
          <p className="text-2xl items-center justify-center flex">Filtration</p>
          <hr></hr>
          <form>
            <ul>
              {filterNames.map((prop) => (
                <li>
                  <FilterGroup
                    name={prop}
                    filterSet={
                      new Set(
                        shopItems.map((item) => (item.props as any)[prop])
                      )
                    }
                  />
                </li>
              ))}
              <li>
                <button
                  type="submit"
                  className="bg-[#21ad9a] p-2 rounded-xl w-full"
                >
                  Apply
                </button>
              </li>
            </ul>
          </form>
        </div>
{/*         <button className="static bg-[#21ad9a] text-white h-screen items-center justify-center flex sticky top-0">
          <p className="p-1 items-center justify-center text-2xl">{"►"}</p>
        </button> */}
      </div>
      <div className="p-4 pl-10 grid grid-cols-4 gap-4 items-center">
        {shopItems.map((item) => (
          <CatalogItem item={item} />
        ))}
      </div>
    </main>
  );
}
