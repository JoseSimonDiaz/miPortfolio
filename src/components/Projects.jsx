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
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de pedidos",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/path-to-ecommerce-image.jpg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con características de colaboración en tiempo real",
      technologies: ["React", "Express", "Socket.io", "MongoDB"],
      image: "/path-to-taskapp-image.jpg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard para análisis de redes sociales con visualización de datos en tiempo real",
      technologies: ["React", "D3.js", "Node.js", "Redis"],
      image: "/path-to-dashboard-image.jpg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Aplicación para seguimiento de ejercicios y nutrición con planes personalizados",
      technologies: ["React", "Firebase", "Chart.js"],
      image: "/path-to-fitness-image.jpg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Plataforma inmobiliaria con búsqueda avanzada y visualización de propiedades",
      technologies: ["React", "Node.js", "PostgreSQL", "MapBox"],
      image: "/path-to-realestate-image.jpg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del clima con pronósticos detallados y alertas meteorológicas",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      image: "/path-to-weather-image.jpg",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Recipe Sharing Platform",
      description: "Plataforma para compartir y descubrir recetas con funcionalidades sociales",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      image: "/path-to-recipe-image.jpg",
      demoUrl: "#",
      githubUrl: "#"
    }
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