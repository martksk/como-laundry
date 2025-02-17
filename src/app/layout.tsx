import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { HomeProvider } from "@/context/homecontext";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Como Laundry",
  description: "Como Laundry",
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
        <div className=" jun-layout">
          <header className="jun-header jun-header-h-[160px]">
            <Navbar />
          </header>
          <main className="jun-content">
            <HomeProvider>{children}</HomeProvider>
          </main>
          <footer className="jun-footer jun-footer-h-[160px]">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
