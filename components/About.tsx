import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="max-w-6xl pt-16 mx-auto md:pt-38 dark:bg-dark">
      <div className="container lg:pl-14">
        <div className="flex flex-wrap">
          {/* Kiri */}
          <div className="w-full mb-10 lg:w-1/2">
            <h4 className="mb-2 text-lg font-bold text-yellow-500 uppercase">About Me</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">A Glimpse into My Journey 🌍</h2>
            <p className="max-w-md text-base font-medium text-second">
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
            <h3 className="pt-6 mb-4 text-2xl font-bold text-dark dark:text-white">Let`s be Friends</h3>
            <p className="max-w-md mb-4 text-base font-medium text-second">Don`t hesitate to connect with me on social media. I enjoy sharing, learning, and meeting new people. Let`s connect! 🚀😊</p>

            {/* Sosial Media */}
            <div className="flex items-center">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/yudstwan_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-second text-second hover:border-warning hover:bg-warning hover:text-white"
              >
                <FaInstagram className="text-[20px]" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yudisetiawann/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-second text-second hover:border-warning hover:bg-warning hover:text-white"
              >
                <FaLinkedinIn className="text-[18px]" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/yudsetiawann/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-second text-second hover:border-warning hover:bg-warning hover:text-white"
              >
                <FaFacebookF className="text-[18px]" />
              </a>

              {/* Tiktok */}
              <a
                href="https://www.tiktok.com/@4.54vencuave"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mr-3 border rounded-full h-9 w-9 border-second text-second hover:border-warning hover:bg-warning hover:text-white"
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
