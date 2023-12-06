export default function FilterGroup({
  name,
  filterSet,
}: {
  name: string;
  filterSet: Set<string>;
}) {
  return (
    <div className="my-2 p-2 bg-slate-500 rounded-lg">
      <div className="flex place-content-between"><p>{name}</p><p>+</p></div>
      <hr className="h-1"></hr>
      <ul>
        {Array.from(filterSet).map((value) => (
          <li className=" hover:bg-[#94a0b8] w-full rounded">
            <label>
              <input type="checkbox"className="m-3" name={`${name}`} value={value} />
              {value}
            </label>
          </li>
        ))}
      </ul>
     
    </div>
  );
}
