import ProjectCard from "./ProjectCard"; // Impor cetakan kartu kita

// --- DI SINI ANDA MENARUH DATA PROYEK ANDA ---
// Ganti ini dengan data proyek Anda yang sebenarnya nanti
const projectsData = [
  {
    title: "PD-Tick",
    description: "A customer support ticket management system for submitting and tracking inquiries, built with Laravel, Livewire, and Filament.",
    imageUrl: "/ticketing.png",
    link: "https://github.com/yudsetiawann/PD-Ticket", // Ganti dengan link GitHub/live Anda
  },
  {
    title: "Blog System",
    description: "An intuitive platform for creating and publishing notes and articles. It features secure authentication, profile management, and a built-in chat to connect with other users.",
    imageUrl: "/blog-system.png",
    link: "https://github.com/yudsetiawann/Blog-System",
  },
  {
    title: "Webstore",
    description: "An online store platform for browsing and purchasing a wide range of products. It includes a shopping cart and secure payment options for an easy and convenient shopping experience. ",
    imageUrl: "/webstore.png",
    link: "https://github.com/yudsetiawann/webstoree",
  },
];
// ------------------------------------------------

export default function Projects() {
  return (
    <section id="projects" className="container pt-20 md:pt-24">
      <h4 className="mb-2 text-lg font-bold text-center text-yellow-500 uppercase">Portfolio</h4>
      <h2 className="mb-5 text-3xl font-bold text-center md:text-4xl">Latest Projects</h2>
      <p className="max-w-2xl mx-auto mb-12 md:text-center">
        Every project in this portfolio is the result of my exploration, learning, and dedication to the world of technology. From building digital solutions to developing creative applications, each work reflects my passion for creating
        something meaningful. Feel free to explore my projects, and don’t hesitate to share your feedback or discuss them further! 😊✨{" "}
      </p>

      {/* Ini adalah Grid untuk Kartu Proyek */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* --- INI ADALAH SIHIRNYA --- */}
        {/* Kita me-looping 'projectsData' dan merender 'ProjectCard' 
            untuk setiap item di dalamnya */}
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index} // 'key' unik wajib ada saat mapping di React
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
        {/* --------------------------- */}
      </div>
    </section>
  );
}
