export default function FilterGroup({
  name,
  filterSet,
}: {
  name: string;
  filterSet: Set<string>;
}) {
  return (
    <div className="bg-slate-500 my-2 p-2 rounded-xl">
      <p>{name}</p>
      <ul>
        {Array.from(filterSet).map((value) => (
          <li>
            <label>
              <input type="checkbox" name={`${name}`} value={value} />
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
