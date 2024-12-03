import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../css/hero.css'
import cv from '../../public/downloads/cv_JoseDiaz.pdf'

function Hero() {
  // const handleDownloadCV = () => {
  //   // console.log('Downloading CV...');
  //   window.open('../../public/cv_JoseDiaz.pdf', '_blank')    
  // };

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-[#10101A] text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              José Simon Díaz
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-3xl text-[#980094] mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Soy un programador  <span>apasionado</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Apasionado por crear soluciones tecnológicas innovadoras y funcionales.
              especializándome en la creación de sitios web, servicios web, tiendas en línea modernos y elegantes.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href={cv}
                target='_blank'
                className="w-full sm:w-auto bg-[#980094] hover:bg-[#7a0076] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descargar CV
              </motion.a>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/jos%C3%A9-sim%C3%B3n-d%C3%ADaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl hover:text-[#980094] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/JoseSimonDiaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl hover:text-[#980094] transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#980094]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/168593221?v=4"
                alt="José Simon Díaz"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;