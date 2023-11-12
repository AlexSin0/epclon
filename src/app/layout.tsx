import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import ProfileButton from "@/components/ProfileButton";
import App from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {/* Header */}
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
                <button className="pl-6">
                  {" "}
                  <Image
                    src="/logo.jpg"
                    alt="Epclon Logo"
                    className="dark:invert border-solid rounded-full hower:w-[60px]"
                    width={50}
                    height={50}
                    priority
                  />
                </button>
              </div>
            </div>
            <div
              id="user-menu"
              className="absolute right-5 z-10 mt-2 w-47 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="block px-4 py-2 text-sm text-gray-700">
                <ProfileButton />
              </div>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-1"
              >
                Settings
              </a>
            </div>
          </nav>

          {/* Content */}
          {children}
          {/* Footer */}
          <nav className="bg-[#303a50] font-arial p-2 items-center text-lg">
            <ul className="flex text-white items-center mx-auto justify-center w-1/6">
              <li className="text-gray-300 hover:bg-[#475c85] hover:text-white rounded-md px-3 py-2 font-medium">
                <Link className="" href="/">
                  Epclon
                </Link>
              </li>
              <li className="text-gray-300 hover:bg-[#475c85] hover:text-white rounded-md px-3 py-2  font-medium">
                <Link className="" href="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <hr></hr>
            <p className="text-gray-400">
              A copyright notice, link to a privacy policy, sitemap, logo,
              contact information, social media icons, and an email sign-up
              form.
            </p>
          </nav>
        </SessionProvider>
      </body>
    </html>
  );
}
