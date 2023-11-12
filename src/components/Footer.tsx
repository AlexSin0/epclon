import Link from "next/link";

export default function Footer() {
  return (
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
        A copyright notice, link to a privacy policy, sitemap, logo, contact
        information, social media icons, and an email sign-up form.
      </p>
    </nav>
  );
}
