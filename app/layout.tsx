import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import ModalProvider from "@/providers/ModalProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "E-Commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />{" "}
      </body>
    </html>
  );
}
