import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SharedLayout from "@/components/custom/sharedLayout";
import Header from "@/components/custom/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nextjs Blog app",
  description: "read, create, edit and delete blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SharedLayout header={<Header />}>{children}</SharedLayout>
      </body>
    </html>
  );
}
