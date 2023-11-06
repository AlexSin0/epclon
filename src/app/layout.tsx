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
          <nav className="bg-[#303a50] font-arial text-white flex flex-row p-2 justify-between">
              <ul className="basis-1/5 flex flex-row place-content-between margin-auto">
                <li className="basis-1/4 ">
                  <Link className=" hover:blur-sm" href="/">
                    <Image
                      src="/logo.jpg"
                      alt="Epclon Logo"
                      className="dark:invert"
                      width={50}
                      height={50}
                      priority
                    />
                  </Link>
                </li>
                <li className="basis-1/4 ">
                  <ProfileButton />
                </li>
                <li className="basis-1/4">
                  <Link className="" href="/cart">
                    Cart
                  </Link>
                </li>
                <li className="basis-1/4">
                  <Link className="" href="/catalog">
                    Catalog
                  </Link>
                </li>
              </ul>
              <form
                id="searchBar"
                className="basis-1/5 p-1.5 bg-white border-solid rounded-full h-13 flex flex-row justify-between"
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

          {children}
          {/* Footer */}
          <nav className="bg-[#303a50]">
            <ul className="">
              <li className="">
                <Link className="" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="" href="/catalog">
                  About
                </Link>
              </li>
            </ul>
            <hr></hr>
            <p>
              a copyright notice, link to a privacy policy, sitemap, logo,
              contact information, social media icons, and an email sign-up
              form.
            </p>
          </nav>
        </SessionProvider>
      </body>
    </html>
  );
}
