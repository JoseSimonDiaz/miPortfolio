import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const phoneNumber = '+5493816179958'; 
  const defaultMessage = 'Hola José, estoy interesado en tus servicios.'; 
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

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
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
      </div>

    
      <a
        href={whatsappLink} 
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