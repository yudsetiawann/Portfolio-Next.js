import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    // Kita beri padding atas (pt-32) agar tidak tertutup Navbar (tinggi 16 + jarak)
    <section id="home" className="container pt-28 md:pb-16 md:pt-46">
      <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
        {/* === Kolom Teks === */}
        <div className="flex flex-col space-y-5">
          <h1 className="mb-2 text-lg font-bold text-yellow-500 uppercase">
            Hi, I`m <span className="block mt-1 mb-1 text-4xl font-bold text-dark lg:text-5xl dark:text-white">Muhammad Yudi Setiawan</span>
          </h1>
          <p className="max-w-md text-base font-medium text-second">
            As a 5th-semester Informatics student, I am enthusiastic about exploring the world of technology. This portfolio presents a collection of projects and experiences that reflect my dedication and creativity in developing digital
            solutions. Thank you for visiting!
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link href="#projects" className="px-6 py-3 font-semibold text-center transition duration-200 transform rounded-lg bg-violet-600 hover:bg-violet-700">
              View Project
            </Link>
            <Link href="#contact" className="px-6 py-3 font-semibold text-center transition-colors bg-yellow-500 border rounded-lg border-foreground/10 hover:bg-yellow-600">
              Contact me
            </Link>
          </div>
        </div>

        {/* === Kolom Gambar === */}
        <div className="flex justify-center md:justify-end">
          <Image
            // Ganti ini dengan path ke gambar Anda
            src="/yud.jpg"
            alt="Foto Profil"
            width={300} // Wajib: lebar asli gambar
            height={300} // Wajib: tinggi asli gambar
            className="rounded-full shadow-lg"
            priority // <-- Penting: Memberi tahu Next.js untuk memuat gambar ini dulu
          />
        </div>
      </div>
    </section>
  );
}
