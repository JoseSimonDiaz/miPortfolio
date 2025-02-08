import { motion } from 'framer-motion';


const Education = () => {
  const education = [
    {
      title: "INGENIERO EN SISTEMAS DE INFORMACIÓN",
      institution: "UTN - FACULTAD REGIONAL TUCUMAN",
      period: "2022 - Cursando primer año"
    },
    {
      title: "HUMANIDADES Y CIENCIAS SOCIALES",
      institution: "Esc sec barrio el mirador",
      period: "2021 - Graduado"
    },
    {
      title: "Fullstack Web Developer",
      institution: "Rolling Code Scholl",
      period: "2024 - Finalizado"
    },
    {
      title: "Curso de idioma japones",
      institution: "Doki doki japan",
      period: "2021 - Finalizado"
    },
    {
      title: "Técnico en arreglo de celulares y tablet",
      institution: "Ifet",
      period: "2019 - Finalizado"
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0C0C14]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Educación
        </motion.h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#10101A] p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-[#980094]">{item.title}</h3>
              <p className="text-gray-300">{item.institution}</p>
              <p className="text-sm text-gray-400">{item.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;