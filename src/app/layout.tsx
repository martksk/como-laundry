import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/scss/app.scss";
import "./globals.css";
import Navbar from "../components/Navbar";
import { HomeProvider } from "@/context/homecontext";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/ui/floatingbuttons";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="jun-layout">
          <Navbar />
          <div className="h-[160px]"></div> {/* Spacer for fixed navbar */}
          <main className="jun-content">
            <HomeProvider>
              {children}
              <FloatingButtons />
            </HomeProvider>
          </main>
          <footer className="jun-footer jun-footer-h-[160px]">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
