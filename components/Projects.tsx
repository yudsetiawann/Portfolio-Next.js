// components/Projects.tsx

import ProjectCard from "./ProjectCard";

const projectsData = [
  // ... Data Anda sudah benar ...
  {
    title: "E-Tick PD",
    description: "A customer support ticket management system for submitting and tracking inquiries, built with Laravel, Livewire, and Filament.",
    imageUrl: "/ticketingv2.png",
    link: "https://github.com/yudsetiawann/PD-Ticket",
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

export default function Projects() {
  return (
    <section id="projects" className="container pt-20 md:pt-24 reveal">
      <h4 className="mb-2 text-lg font-bold text-center text-yellow-500 uppercase">Portfolio</h4>

      <h2 className="mb-5 text-3xl font-bold text-center text-foreground md:text-4xl">Latest Projects</h2>

      {/* PERBAIKAN 2: Tambahkan 'text-foreground/80' untuk paragraf */}
      <p className="max-w-2xl mx-auto mb-12 text-foreground/80 md:text-center">
        Every project in this portfolio is the result of my exploration, learning, and dedication to the world of technology. From building digital solutions to developing creative applications, each work reflects my passion for creating
        something meaningful. Feel free to explore my projects, and don’t hesitate to share your feedback or discuss them further! 😊✨{" "}
      </p>

      {/* Grid sudah benar */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} link={project.link} />
        ))}
      </div>
    </section>
  );
}
