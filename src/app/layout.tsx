import "@/_styles/globals.css";
import type { Metadata } from "next";
import Navigation from "../_components/Navigation";
import Logo from "../_components/Logo";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefinSans);

export const metadata: Metadata = {
  title: {
    template: "%s - xReservation",
    default: "Welcome / xReservation",
  },
  description: "An advanced Reservation system build using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} bg-primary-950 text-primary-100 min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer className="text-blue-500">
          Copyright &copy; xReservation 2025
        </footer>
      </body>
    </html>
  );
}
