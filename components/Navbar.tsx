"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton"; // Pastikan impor ini ada

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="flex items-center justify-between h-16 px-5 md:px-20">
        <Link href="/" className="text-lg font-bold transition-colors text-foreground hover:text-foreground/80">
          yudstwan.
        </Link>

        <div className="flex items-center gap-4">
          {/* Navigasi Desktop */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <Link href="#about" className="text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-foreground">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-foreground">
                  Proyek
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-foreground">
                  Kontak
                </Link>
              </li>
            </ul>
          </nav>

          {/* Tombol Tema */}
          <ThemeToggleButton />

          {/* Tombol Hamburger */}
          <button className="p-2 rounded-md md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              // Ikon X (Close)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ikon Hamburger (Menu)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* === INI ADALAH PERBAIKANNYA === */}
      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="absolute left-0 w-full p-4 shadow-lg md:hidden top-16 animate-fadeInDown bg-background/90 backdrop-blur-md">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="#about" className="block py-2 transition-colors duration-200 text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Tentang
              </Link>
            </li>
            <li>
              <Link href="#projects" className="block py-2 transition-colors duration-200 text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Proyek
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block py-2 transition-colors duration-200 text-foreground/80 hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
