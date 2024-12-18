import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projects = [
    {
      title: "La Copa del Rey",
      description:
        "Ecommerce de bebidas inspirado en la era medieval, especializado en cervezas artesanales, vinos históricos e hidromiel, ofreciendo una experiencia única de compra real.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      image: "/images/laCopaDelRey.jpg",
      link: "https://lacopadelrey.netlify.app/",
    },
    {
      title: "TechnoRolling",
      description:
        "Tienda en línea de productos electrónicos y componentes de computadora, diseñada para ofrecer lo último en tecnología a gamers y entusiastas de hardware.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      image: "/images/technoRolling.png",
      link: "https://technorolling.netlify.app/",
    },
    {
      title: "Generar Paz Moda",
      description:
        "Ecommerce de moda sostenible con colecciones modernas y accesibles, pensado para quienes buscan estilo con conciencia ambiental.",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Node.js",
        "MongoDB",
        "Express",
      ],
      image: "/images/generarPazModa.png",
      link: "https://generalpaz.netlify.app/",
    },
    {
      title: "WhatsApp Fake",
      description: "Proyecto de WhatsApp fake de un torneo de programacion",
      technologies: ["HTML", "CSS"],
      image: "/images/wpFake.png",
      link: "https://whats-app-fake.vercel.app/index.html",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-[#10101A] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 9000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-[#0C0C14] rounded-lg overflow-hidden shadow-lg h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#980094] text-white px-2 py-1 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#980094] hover:text-[#980094]/80 cursor-pointer"
                      >
                        Ver proyecto →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default Projects;
