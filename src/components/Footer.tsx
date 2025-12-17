import NavButtonLink from "./NavButtonLink";

export default function Footer() {
  return (
    <nav className="bg-gray-700 font-arial p-2 items-center">
      <div className="flex text-white items-center mx-auto justify-center w-1/6">
        <NavButtonLink href="/">Epclon</NavButtonLink>
        <NavButtonLink
          href="https://github.com/AlexSin0/epclon"
          target="_blank"
        >
          About Us
        </NavButtonLink>
      </div>
    </nav>
  );
}
