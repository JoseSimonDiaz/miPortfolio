import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // Importar el ícono de WhatsApp

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#10101A] min-h-screen text-white relative"
    >
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={`transition-all duration-300 ${isMenuOpen ? 'filter blur-sm' : ''}`}>
        <Hero />
        <Projects />
        <AboutSection />
        <Skills />
        <Contact />
      </div>

      {/* Ícono de WhatsApp */}
      <a
        href="https://wa.me/+5493816179958" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50"
      >
        <FaWhatsapp 
          className="w-12 h-12 p-2 rounded-full shadow-lg cursor-pointer transition-colors duration-300"
          style={{ backgroundColor: '#980094', color: '#10101A' }}
        />
      </a>
    </motion.div>
  );
}

export default App;