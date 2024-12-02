import { motion } from 'framer-motion';
import FadeInWhenVisible from './animations/FadeInWhenVisible';
import '../css/skills.css'

function Skills() {
  const skills = [
    {
      category: "Lenguajes de Programación",
      items: ["JavaScript", "HTML", "CSS"]
    },
    {
      category: "Frameworks y Bibliotecas",
      items: ["Bootstrap", "React", "Node.js", "Express"]
    },
    {
      category: "Metodologías de Desarrollo",
      items: ["Agile (Scrum)"]
    },
    {
      category: "Base de datos",
      items: ["MongoDB"]
    },
    {
      category: "Herramientas",
      items: ["Postman", "Git", "GitHub"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-[#10101A] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <motion.div 
                className="bg-[#0C0C14] rounded-lg p-6 shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-[#980094] mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-[#980094] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;