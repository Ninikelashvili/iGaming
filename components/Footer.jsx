import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Logo } from "@/svg/Logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div
        style={{ backgroundImage: "url('/assets/Vector.png')" }}
        className="bg-burntSienna/90 px-4 py-8  bg-contain bg-left bg-no-repeat"
      >
        <div className="container mx-auto flex justify-between items-start gap-8 py-10 lg:gap-10">
          <Link
            href="/"
            className="min-w-10 w-10 h-10 flex justify-center items-center sm:min-w-14 sm:w-14 sm:h-14 lg:min-w-24 lg:w-24 lg:h-24"
          >
            <Logo main="#BB8525" bg="#000" />
          </Link>
          <nav className="grid grid-cols-1 gap-8 lg:gap-80 md:grid-cols-2">
            <div>
              <h3 className="font-bold font-base mb-4">GET IN TOUCH</h3>
              <ul className="flex flex-col justify-start gap-2">
                <li className="font-medium">
                  <Link
                    className="border-b border-transparent transition-all duration-300 hover:border-darkEspresso"
                    href="/"
                    target="_blanck"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="font-medium">
                  <Link
                    className="border-b border-transparent transition-all duration-300 hover:border-darkEspresso"
                    href="/"
                    target="_blanck"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="font-medium">
                  <Link
                    className="border-b border-transparent transition-all duration-300 hover:border-darkEspresso"
                    href="/promotions"
                    target="_blanck"
                  >
                    Promotions
                  </Link>
                </li>
                <li className="font-medium">
                  <Link
                    className="border-b border-transparent transition-all duration-300 hover:border-darkEspresso"
                    href="/"
                    target="_blanck"
                  >
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold font-base mb-4">FOLLOW US</h3>
              <ul className="flex justify-start items-center gap-4">
                <li>
                  <Link
                    className="p-2 transition-all duration-300 hover:text-goldenAmber"
                    target="_blanck"
                    href="https://facebook.com"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    className="p-2 transition-all duration-300 hover:text-goldenAmber"
                    target="_blanck"
                    href="https://instagram.com"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    className="p-2 transition-all duration-300 hover:text-goldenAmber"
                    target="_blanck"
                    href="https://twitter.com"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    className="p-2 transition-all duration-300 hover:text-goldenAmber"
                    target="_blanck"
                    href="https://tiktok.com"
                  >
                    <FaTiktok />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto px-4 flex justify-end items-center gap-3 py-2 text-xs text-lightIvory">
          <span>Copyright ©</span>
          <Link
            className="border-b border-transparent hover:border-lightIvory transition-all duration-300"
            href="/"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
