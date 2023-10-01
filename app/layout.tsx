import "./globals.css";

import type { Metadata } from "next";
import { NavBar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Afterflea",
  description: "Smart Employee Ai App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
