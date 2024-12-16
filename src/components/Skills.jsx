import { motion } from 'framer-motion';

const Skills = () => {
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
          className="text-3xl font-bold mb-12 text-center"
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
                    className="bg-[#980094]/20 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
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