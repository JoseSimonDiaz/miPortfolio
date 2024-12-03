import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './animations/FadeInWhenVisible';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Projects() {
  const projects = [
    {
      title: "La Copa del Rey",
      description: "Ecommerce de bebidas inspirado en la era medieval, especializado en cervezas artesanales, vinos históricos e hidromiel, ofreciendo una experiencia única de compra real.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      image: "../../public/laCopaDelRey.png",
      demoUrl: "https://lacopadelrey.netlify.app/",
      githubUrl: "https://github.com/JoseSimonDiaz/LaCopaDelRey"
    },
    {
      title: "TechnoRolling",
      description: "Tienda en línea de productos electrónicos y componentes de computadora, diseñada para ofrecer lo último en tecnología a gamers y entusiastas de hardware.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      image: "../../public/technoRolling.png",
      demoUrl: "https://technorolling.netlify.app/",
      githubUrl: "https://github.com/JoseSimonDiaz/grupo4_TechnoRolling"
    },
    {
      title: "Generar Paz Moda",
      description: "Ecommerce de moda sostenible con colecciones modernas y accesibles, pensado para quienes buscan estilo con conciencia ambiental.",
      technologies: ["React", "HTML", "CSS", "Javascript", "Bootstrap", "Node.js", "MognoDB", "Express"],
      image: "../../public/generarPazModa.png",
      demoUrl: "https://generalpaz.netlify.app/",
      githubUrl: "https://github.com/Boomcer/front-proyectoFinal/tree/main"
    },    
    {
      title: "WhatsApp Fale",
      description: "Proyecto de WhatsApp fake de un torneo de programacion",
      technologies: ["HTML", "CSS"],
      image: "../../public/favicon/wpFake.png",
      demoUrl: "https://web.whatsapp.com/",
      githubUrl: "https://github.com/JoseSimonDiaz/WhatsApp_fake.git"
    },
    
  ];

  return (
    <section id="proyectos" className="py-20 bg-[#10101A] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <FadeInWhenVisible>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
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
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#980094] hover:bg-[#7a0076] text-white px-4 py-2 rounded-md transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default Projects;