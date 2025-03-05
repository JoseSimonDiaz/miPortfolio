import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { x: 0 },
    closed: { x: '100%' }
  };

  const lineVariants = {
    open: { rotate: 45, y: 10 },
    closed: { rotate: 0, y: 0 }
  };

  const line2Variants = {
    open: { opacity: 0 },
    closed: { opacity: 1 }
  };

  const line3Variants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 }
  };

  const navLinks = [
    { title: 'Inicio', to: 'inicio', icon: <FaHome /> },
    { title: 'Sobre mí', to: 'sobre-mi', icon: <FaUser /> },
    { title: 'Habilidades', to: 'skills', icon: <FaCode /> },
    { title: 'Proyectos', to: 'proyectos', icon: <FaProjectDiagram /> },
    { title: 'Contacto', to: 'contacto', icon: <FaEnvelope /> }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0C0C14]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-[#980094]"
          >
            José Simón Díaz
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#980094] transition-colors flex items-center gap-2"
              >
                {link.icon} {/* Icono */}
                {link.title}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              variants={lineVariants}
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-0.5 bg-white mb-1.5 block transition-all"
            />
            <motion.span
              variants={line2Variants}
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-0.5 bg-white mb-1.5 block transition-all"
            />
            <motion.span
              variants={line3Variants}
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-0.5 bg-white block transition-all"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-64 bg-[#0C0C14] z-40 md:hidden shadow-xl"
      >
        <div className="flex flex-col space-y-8 pt-20 px-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg hover:text-[#980094] transition-colors flex items-center gap-2"
            >
              {link.icon} {/* Icono */}
              {link.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
