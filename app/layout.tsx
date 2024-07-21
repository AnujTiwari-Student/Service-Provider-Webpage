import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ScrollProvider } from "./context/ScrollContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-[#F8F8FF]">
        <ScrollProvider>
          <header className="shadow-lg rounded-lg md:rounded-xl fixed p-3 m-6 md:my-6 md:mx-28 md:py-5 md:px-12 bg-white z-50">
            <Header />
          </header>

          <div className="flex-1 overflow-x-hidden">
            <main className="">{children}</main>
          </div>
        </ScrollProvider>
      </body>
    </html>
  );
}