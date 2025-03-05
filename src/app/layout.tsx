import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','700'] ,
  display: 'swap' 
})

export const metadata: Metadata = {
  title: "Cine Scope",
  description: "Explore and discover movies effortlessly.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
