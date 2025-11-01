import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Saya",
  description: "Portofolio web modern dibuat dengan Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. Tambahkan 'suppressHydrationWarning' di <html>
    // Ini direkomendasikan oleh next-themes
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* 3. Bungkus semuanya dengan ThemeProvider */}
        <ThemeProvider
          attribute="class" // Ini memberi tahu 'next-themes' untuk mengubah 'class' di <html>
          defaultTheme="system" // Defaultnya akan mengikuti tema OS pengguna
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="px-5 md:px-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
