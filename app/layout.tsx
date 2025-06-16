import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JGB Accounting",
  description: "Professional accounting services for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <header className="w-full py-6 bg-blue-900 text-white shadow">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">JGB Accounting</h1>
            <nav>
              <ul className="flex gap-6 text-base">
                <li>
                  <Link href="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">Services</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-10 min-h-[70vh]">
          {children}
        </main>
        <footer className="w-full py-4 bg-blue-900 text-white text-center">
          &copy; {new Date().getFullYear()} JGB Accounting. All rights reserved.
        </footer>
      </body>
    </html>
  );
}