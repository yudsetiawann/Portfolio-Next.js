// app/components/ScrollObserver.tsx

"use client"; // <--- WAJIB! Ini menandakan komponen ini berjalan di client

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // --- Logika Animasi Scroll Reveal Anda ---
    const revealElements = document.querySelectorAll(".reveal");

    if (revealElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Saat elemen terlihat, tambahkan kelas 'revealed'
              entry.target.classList.add("revealed");
            } else {
              // Saat elemen keluar dari pandangan, hapus kelas 'revealed'
              entry.target.classList.remove("revealed");
            }
          });
        },
        {
          threshold: 0.1, // Picu saat 10% elemen terlihat
        }
      );

      // Amati setiap elemen dengan kelas .reveal
      revealElements.forEach((el) => {
        // Terapkan --delay dari inline style jika ada
        if (el instanceof HTMLElement) {
          const delay = el.style.animationDelay || "0s";
          el.style.setProperty("--delay", delay);
          el.style.transitionDelay = "var(--delay)";
        }
        observer.observe(el);
      });

      // Fungsi cleanup: Hentikan observasi saat komponen di-unmount
      return () => {
        revealElements.forEach((el) => {
          observer.unobserve(el);
        });
        observer.disconnect();
      };
    }
  }, []); // <-- Array dependensi kosong, agar useEffect hanya berjalan sekali saat mount

  return null; // Komponen ini tidak me-render UI apapun, hanya menjalankan script
}
