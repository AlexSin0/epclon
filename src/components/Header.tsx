import Link from "next/link";
import Image from "next/image";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <nav className="bg-[#303a50]">
      <div className="flex font-arial items-center justify-between text-lg">
        <ul className="text-white flex items-center">
          <li className="px-3 py-2">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="Epclon Logo"
                className="dark:invert border-solid rounded-full hower:w-[60px]"
                width={50}
                height={50}
                priority
              />
            </Link>
          </li>
          <li className="text-gray-300 hover:bg-[#475c85] hover:text-white rounded-md px-3 py-2 font-medium">
            <Link className="" href="/cart">
              Cart
            </Link>
          </li>
          <li className="text-gray-300 hover:bg-[#475c85] hover:text-white rounded-md px-3 py-2 font-medium">
            <Link className="" href="/catalog">
              Catalog
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-between">
        <SearchBar />
        <ProfileButton />
        </div>
      </div>
    </nav>
  );
}
