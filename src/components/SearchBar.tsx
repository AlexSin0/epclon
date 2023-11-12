export default function SearchBar() {
  return (
    <div className="flex justify-between px-3 py-2">
      <form
        id="searchBar"
        className=" p-0.5 bg-white border-solid rounded-full h-11 flex justify-between"
      >
        <input
          id="searchInput"
          className="rounded-full pl-2 text-black"
          type="text"
          placeholder="Search"
        />
        <button
          id="searchButton"
          className="bg-[#21ad9a] float-right w-10 h-10 rounded-full text-white"
          type="button"
        >
          Go
        </button>
      </form>
    </div>
  );
}
