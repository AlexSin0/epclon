export default function SearchBar() {
  return (
    <div className="flex justify-between">
      <form className="p-0.5 bg-white rounded-full h-11 flex justify-between text-lg">
        <input
          className="rounded-full pl-2 text-black"
          type="text"
          placeholder="Search..."
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
