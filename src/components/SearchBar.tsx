export default function SearchBar() {
  return (
    <div className="flex justify-between px-3 py-2">
      <form className="p-0.5 bg-white border-solid rounded-full h-11 flex justify-between">
        <input
          className="rounded-full pl-2 text-black"
          type="text"
          placeholder="Search"
        />
        <button
          className="bg-[#21ad9a] float-right w-10 h-10 rounded-full text-white"
          type="submit"
        >
          Go
        </button>
      </form>
    </div>
  );
}
