import Link from "next/link";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";
import NavButtonLink from "./NavButtonLink";

export default function Header() {
  return (
    <nav className="bg-[#303a50] flex items-center justify-between">
      <div className="flex items-center">
        <Link
          href="/"
          className="rounded-full m-3 w-[50px] h-[50px] bg-[url('/logo.jpg')] bg-cover"
        ></Link>
        <NavButtonLink href="/cart">Cart</NavButtonLink>
        <NavButtonLink href="/catalog">Catalog</NavButtonLink>
        <NavButtonLink href="/product">DELETE_THIS-Product</NavButtonLink>
      </div>
      <div className="flex items-center justify-between">
        <SearchBar />
        <ProfileButton />
      </div>
    </nav>
  );
}
