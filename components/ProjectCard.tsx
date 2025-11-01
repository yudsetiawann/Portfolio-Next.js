// components/ProjectCard.tsx

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    // PERBAIKAN 1: Tambahkan 'bg-card' untuk memberi latar belakang pada kartu
    <div className="flex flex-col overflow-hidden transition duration-300 transform border-2 rounded-lg shadow-lg bg-card hover:scale-105 dark:hover:border-violet-800">
      {/* Gambar Proyek (Sudah Benar) */}
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
      </div>

      {/* Konten Teks */}
      {/* PERBAIKAN 2: Tambahkan 'bg-card' di sini juga 
          (beberapa browser membutuhkannya untuk flex-col) */}
      <div className="flex flex-col p-6 grow bg-card">
        {/* PERBAIKAN 3: Tambahkan 'text-foreground' pada judul */}
        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>

        {/* Paragraf Anda (text-foreground/70) SUDAH BENAR */}
        <p className="mb-4 text-foreground/70 grow">{description}</p>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          // PERBAIKAN 4: Tambahkan 'text-white' agar selalu terbaca
          className="inline-block px-4 py-2 mt-auto font-medium text-center text-white transition-opacity rounded-lg bg-violet-600 hover:opacity-90"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
