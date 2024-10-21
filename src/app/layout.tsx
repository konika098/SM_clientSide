import type { Metadata } from "next";
import localFont from "next/font/local";
import { Jost } from "next/font/google"; 
import "./globals.css";
import Layout from "@/app/components/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const jost = Jost({
  weight: ["100", "400", "500", "600", "700", "900"], 
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Style Mela",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${jost.className} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
