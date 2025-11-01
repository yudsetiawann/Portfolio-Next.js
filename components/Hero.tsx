import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="container pt-28 md:pb-16 md:pt-46 reveal">
      <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
        {/* === Kolom Teks === */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-lg font-bold text-yellow-500">Hi, I`m</h1>

          {/* 👇 PERBAIKAN 1: Tambahkan 'text-foreground' */}
          <span className="block mb-2 -mt-4 text-4xl font-bold text-foreground lg:text-5xl">Muhammad Yudi Setiawan</span>

          {/* 👇 PERBAIKAN 2: Ganti 'text-second' menjadi 'text-foreground/80' */}
          <p className="max-w-md text-base font-medium text-foreground/80">
            As a 5th-semester Informatics student, I am enthusiastic about exploring the world of technology. This portfolio presents a collection of projects and experiences that reflect my dedication and creativity in developing digital
            solutions. Thank you for visiting!
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            {/* ... (Tombol Anda sudah benar) ... */}
            <Link href="#projects" className="px-6 py-3 font-semibold text-center transition duration-200 transform border rounded-lg bg-violet-600 hover:bg-violet-700 border-foreground/10">
              View Project
            </Link>
            <Link href="#contact" className="px-6 py-3 font-semibold text-center transition-colors bg-yellow-500 border rounded-lg border-foreground/10 hover:bg-yellow-600">
              Contact me
            </Link>
          </div>
        </div>

        {/* === Kolom Gambar === */}
        <div className="flex justify-center md:justify-end">
          <Image src="/yud.jpg" alt="Foto Profil" width={300} height={300} className="rounded-full shadow-lg" priority />
        </div>
      </div>
    </section>
  );
}
