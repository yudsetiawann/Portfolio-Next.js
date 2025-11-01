"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur ...">
      {" "}
      <div className="container flex items-center justify-between h-16 px-5 md:px-20">
        {" "}
        <Link
          href="/"
          className="text-lg font-bold transition-colors text-foreground hover:text-foreground/80" // --- PERUBAHAN: Transisi warna
        >
          yudstwan.{" "}
        </Link>{" "}
        <div className="flex items-center gap-4">
          {" "}
          {/* --- PERUBAHAN: Spasi (gap-2 -> gap-4) --- */}{" "}
          <nav className="hidden md:flex">
            {" "}
            <ul className="flex space-x-6">
              {" "}
              <li>
                {" "}
                <Link
                  href="#about"
                  className="text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-foreground" // --- PERUBAHAN: Transisi warna
                >
                  Tentang{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  href="#projects"
                  className="text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-foreground" // --- PERUBAHAN: Transisi warna
                >
                  Proyek{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  href="#contact"
                  className="text-sm font-medium transition-colors duration-200 text-foreground/70 hover:text-foreground" // --- PERUBAHAN: Transisi warna
                >
                  Kontak{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </nav>
          <ThemeToggleButton /> {/* --- PERUBAHAN: Ikon SVG untuk Hamburger & Close --- */}{" "}
          <button
            className="p-2 rounded-md md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu" // --- PERUBAHAN: Aksesibilitas
          >
            {" "}
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />{" "}
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />{" "}
              </svg>
            )}{" "}
          </button>{" "}
        </div>{" "}
      </div>
      {/* --- PERUBAHAN: Tambahkan 'animate-fadeInDown' untuk animasi --- */}{" "}
      {isMenuOpen && (
        <nav className="absolute left-0 w-full p-4 border-b shadow-lg md:hidden top-16 bg-background animate-fadeInDown">
          {" "}
          <ul className="flex flex-col space-y-4">
            {" "}
            <li>
              {" "}
              <Link
                href="#about"
                className="block py-2 transition-colors duration-200 text-foreground/80 hover:text-foreground" // --- PERUBAHAN: Transisi warna
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                href="#projects"
                className="block py-2 transition-colors duration-200 text-foreground/80 hover:text-foreground" // --- PERUBAHAN: Transisi warna
                onClick={() => setIsMenuOpen(false)}
              >
                Proyek{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                href="#contact"
                className="block py-2 transition-colors duration-200 text-foreground/80 hover:text-foreground" // --- PERUBAHAN: Transisi warna
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>
      )}{" "}
    </header>
  );
}
