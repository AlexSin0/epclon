export default function FilterGroup({
  name,
  filterSet,
}: {
  name: string;
  filterSet: string[];
}) {
  return (
    <div className="my-2 p-2 bg-slate-500 rounded-lg">
      <div className="flex place-content-between">
        <p>{name}</p>
        <p>+</p>
      </div>
      <hr />
      {filterSet.map((value, index) => (
        <label key={index}>
          <div className="hover:bg-[#94a0b8] w-full rounded">
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
