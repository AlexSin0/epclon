export default function FilterGroup({
  name,
  filterSet,
}: {
  name: string;
  filterSet: string[];
}) {
  return (
    <div className="bg-slate-500">
      <p className="bg-slate-800 p-2">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
      {filterSet.sort().map((value, index) => (
        <label key={index}>
          <div className="hover:bg-[#94a0b8] w-full rounded-lg">
            <input
              type="checkbox"
              className="m-3 w-5"
              name={`${name}`}
              value={value}
            />
            {value}
          </div>
        </label>
      ))}
    </div>
  );
}
