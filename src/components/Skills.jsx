import { motion } from 'framer-motion';
import {
  FaJs, // JavaScript
  FaHtml5, // HTML
  FaCss3, // CSS
  FaBootstrap, // Bootstrap
  FaReact, // React
  FaNodeJs, // Node.js
  FaDatabase, // MongoDB
  FaTools, // Herramientas generales
  FaGitAlt, // Git
  FaGithub, // GitHub
  
} from 'react-icons/fa';
import { SiExpress, SiPostman } from 'react-icons/si'; // Express y Postman
import "../css/Proyects.css";

const Skills = () => {
  // Objeto que asocia cada habilidad con un icono
  const skillIcons = {
    "JavaScript": <FaJs />,
    "HTML": <FaHtml5 />,
    "CSS": <FaCss3 />,
    "Bootstrap": <FaBootstrap />,
    "React": <FaReact />,
    "Node.js": <FaNodeJs />,
    "Express": <SiExpress />,
    "Agile (Scrum)": <FaTools />, // Icono genérico para Scrum
    "MongoDB": <FaDatabase />,
    "Postman": <SiPostman />,
    "Git": <FaGitAlt />,
    "GitHub": <FaGithub />,
  };

  const skills = {
    "Lenguajes de Programación": ["JavaScript", "HTML", "CSS"],
    "Frameworks y Bibliotecas": ["Bootstrap", "React", "Node.js", "Express"],
    "Metodologías de Desarrollo": ["Agile (Scrum)"],
    "Base de datos": ["MongoDB"],
    "Herramientas": ["Postman", "Git", "GitHub"]
  };

  return (
    <section id="skills" className="py-20 bg-[#10101A]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 title"
        >
          Habilidades
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0C0C14] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#980094]">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#980094]/20 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {skillIcons[skill]} {/* Renderiza el icono */}
                    {skill} {/* Renderiza el nombre de la habilidad */}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;