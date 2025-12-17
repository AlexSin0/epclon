import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function NavButtonLink({
  children,
  href,
  target,
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className="
      text-white text-lg
      rounded-sm px-3 py-2 mx-1
      hover:bg-white hover:bg-opacity-10 text-nowrap"
      href={href as string}
      target={target}
    >
      {children}
    </Link>
  );
}
