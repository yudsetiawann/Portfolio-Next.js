// components/About.tsx

import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function About() {
  return (
    // PERBAIKAN 1: Hapus 'dark:bg-dark'.
    // Biarkan 'body' di globals.css yang mengatur warna background.
    <section id="about" className="max-w-6xl pt-16 mx-auto md:pt-38 reveal">
      <div className="container lg:pl-14">
        <div className="flex flex-wrap">
          {/* Kiri */}
          <div className="w-full mb-10 lg:w-1/2">
            <h4 className="mb-2 text-lg font-bold text-yellow-500 uppercase">About Me</h4>
            <h2 className="mb-4 text-3xl font-bold text-foreground">A Glimpse into My Journey 🌍</h2>

            <p className="max-w-md text-base font-medium text-foreground/80">
              Life is a journey of learning and growth, and I’m always excited to embrace new experiences. Born and raised in Tasikmalaya as the youngest of six siblings, I’ve always been curious about the world around me.
              <br />
              <br />
              I enjoy exploring new things, whether it’s technology, creativity, or personal development. Beyond my studies, I have a deep passion for sports, especially martial arts like Silat, which keeps me active and disciplined. I also
              love music, photography, and expressing creativity through graphic design.
              <br />
              <br />
              For me, life is about continuous improvement, adapting to challenges, and finding meaning in every experience. Through this portfolio, I hope to share my projects and personal journey with you. Thanks for stopping by!
            </p>
          </div>

          {/* Kanan */}
          <div className="w-full lg:w-1/2">
            {/* PERBAIKAN 4: Tambahkan 'text-foreground' */}
            <h3 className="pt-6 mb-4 text-2xl font-bold text-foreground">Let`s be Friends</h3>

            {/* PERBAIKAN 5: Ganti 'text-second' menjadi 'text-foreground/80' */}
            <p className="max-w-md mb-4 text-base font-medium text-foreground/80">Don`t hesitate to connect with me on social media. I enjoy sharing, learning, and meeting new people. Let`s connect! 🚀😊</p>

            {/* Sosial Media */}
            <div className="flex items-center">
              {/* PERBAIKAN 6 (berlaku untuk semua link):
                  - Ganti 'border-second' & 'text-second' dengan 'border-foreground/30' & 'text-foreground/70'
                  - Ganti 'hover:border-warning' & 'hover:bg-warning' dengan kelas Tailwind standar (mis: 'yellow-500')
              */}
              <a
                href="https://www.instagram.com/yudstwan_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-foreground/30 text-foreground/70 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <FaInstagram className="text-[20px]" />
              </a>

              <a
                href="https://www.linkedin.com/in/yudisetiawann/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-foreground/30 text-foreground/70 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <FaLinkedinIn className="text-[18px]" />
              </a>

              <a
                href="https://www.facebook.com/yudsetiawann/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-foreground/30 text-foreground/70 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <FaFacebookF className="text-[18px]" />
              </a>

              <a
                href="https.www.tiktok.com/@4.54vencuave"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-foreground/30 text-foreground/70 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <FaTiktok className="text-[17px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
