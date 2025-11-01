import Image from "next/image";

// 1. Definisikan "bentuk" data yang kita harapkan menggunakan TypeScript
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// 2. Komponen menerima 'props'
export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-foreground/10 hover:scale-105 hover:border-violet-800 transition transform duration-300">
      {/* Gambar Proyek */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill" // 'fill' akan mengisi div induk
          fill
          style={{ objectFit: "cover" }} // 'cover' akan memotong gambar agar pas
        />
      </div>

      {/* Konten Teks */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4 grow">{description}</p>

        {/* Link (menggunakan <a> biasa karena ini link eksternal) */}
        <a
          href={link}
          target="_blank" // Buka di tab baru
          rel="noopener noreferrer"
          className="mt-auto inline-block text-center bg-violet-600 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
