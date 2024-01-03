import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Navbar by Aryan Arora",
  description:
    "Fully responsive multi-level mega menu navbar inspired by Stripe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-br from-purple-500 to-sky-500 via-blue-500 antialiased bg-no-repeat text-white">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
