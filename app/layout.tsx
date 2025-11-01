// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css"; // File ini sekarang akan mengambil alih warna <body>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollObserver from "../components/ScrollObserver";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yudstwn | Portfolio",
  description: "Modern web portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="px-5 md:px-20">{children}</main>
          <Footer />
        </ThemeProvider>
        <ScrollObserver />
      </body>
    </html>
  );
}
