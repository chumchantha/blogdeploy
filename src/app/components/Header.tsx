"use client";

import Image from "next/image";
import Link from "next/link";

import logoIcon from "@/netflix.svg";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-posts",
    label: "Create Post",
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-6 shadow-md">
      <Link href="/">
        <Image src={logoIcon} alt="Logo" width={24} />
      </Link>
      <nav>
        <ul className="flex items-center gap-4 ">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathName === link.href ? "font-bold" : "text-black"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
