import { Logo } from "@/svg/Logo";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-4 py-2 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="h-10 w-10 flex justify-center items-center sm:w-14 sm:h-14"
        >
          <Logo main="#BB8525" bg="#000" />
        </Link>
        <ul className="flex justify-end items-center gap-8 uppercase">
          <li>
            <Link
              className="py-2 text-xs font-medium border-b-2 border-transparent transition-all duration-300 hover:border-sunsetGold md:text-sm"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="py-2 text-xs font-medium border-b-2 border-transparent transition-all duration-300 hover:border-sunsetGold md:text-sm"
              href="/promotions"
            >
              Promotions
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
