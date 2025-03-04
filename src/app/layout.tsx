import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Cine Scope",
  description: "Explore and discover movies effortlessly.",
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="../assets/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../assets/favicon-16x16.png" />
      <link rel="manifest" href="../assets/site.webmanifest" />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
