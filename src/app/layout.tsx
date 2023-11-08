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
          <nav className="bg-[#303a50] flex font-arial p-2 items-center justify-between text-lg">
            <ul className="text-white flex items-center">
              <li className="">
                <Link className="" href="/">
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
                <ProfileButton />
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
            <form
              id="searchBar"
              className=" p-0.5 bg-white border-solid rounded-full h-11 flex justify-between"
            >
              <input
                id="searchInput"
                className="rounded-full pl-2 "
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
