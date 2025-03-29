import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import { Inter, Geist, Geist_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "xReservation",
  description: "An advanced Reservation system build using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </main>
        <footer className="text-blue-500">
          Copyright &copy; xReservation 2025
        </footer>
      </body>
    </html>
  );
}
