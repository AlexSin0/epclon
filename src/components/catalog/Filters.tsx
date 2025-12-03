import { GetAllFilterProps } from "@/lib/Catalog";
import FilterGroup from "./FilterGroup";

export default async function Filters({
  productType,
}: {
  productType?: string;
}) {
  const filterNames = ["color", "brand", ...filterNamesByProduct(productType)];
  const filterProps = await GetAllFilterProps(filterNames);

  return (
    <div className="bg-slate-600 min-w-[300px] text-white text-lg sticky top-0 max-h-screen">
      <p className="text-2xl bg-slate-700 items-center p-1 justify-center flex">
        Filters
      </p>
      <form className="w-full text-center">
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 p-2 my-4 rounded-lg w-5/6 m-auto"
        >
          Apply
        </button>
        <div className="text-left flex-col gap-4 flex overflow-scroll max-h-[70vh]">
          {filterNames.map((prop, index) => (
            <FilterGroup
              name={prop}
              filterSet={filterProps[index]}
              key={index}
            />
          ))}
        </div>
      </form>
    </div>
  );
}

function filterNamesByProduct(type?: string) {
  switch (type) {
    case "cpu":
      return ["socket"];
    // "threadCount",
    // "coreCount",
    // "clockspeed_GHz",
    case "gpu":
      return ["pcieVersion", "gpuCableType", "memoryStandard"];
    // "memoryCapacity_Gb",
    case "ram":
      return ["ramStandard", "frequency_GHz", "ramCapacity_Gb"];
    case "hd":
      return ["type", "intrface"];
    // "memoryCapacity_Gb",
    // "readSpeed_MBs",
    // "writeSpeed_MBs",
    case "mb":
      return ["socket", "ramStandard", "pcieVersion", "type"];
    // "ramSlotCount",
    case "psu":
      return ["gpuCableType", "efficiencyCertificate"];
    // "power_W",
  }

  return [];
}
