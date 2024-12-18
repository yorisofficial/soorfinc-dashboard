import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import NavigationBarPartner from "./components/partner/NavigationBar";
import NavigationAdmin from "./components/admin/NavigationAdmin";

const Sora = localFont({
  src: "../../public/Font/Sora-VariableFont_wght.ttf",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Partner dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Sora.className}>
        <NavigationBarPartner />
        <NavigationAdmin />
        {children}
      </body>
    </html>
  );
}
