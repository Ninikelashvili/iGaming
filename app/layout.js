import { Marcellus, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "iGaming Landing Page",
  description:
    "Join the next level of iGaming! Secure, fast, and rewarding online gaming experience with top-tier entertainment and exclusive offers.",
  keywords:
    "online gaming, iGaming, secure gaming, gaming offers, entertainment, exclusive rewards",
  author: "Name or Company",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${marcellus.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
