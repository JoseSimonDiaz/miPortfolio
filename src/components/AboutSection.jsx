import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import '../css/about.css'
import { Link } from 'react-scroll';


function About() {
  const education = [
    {
      title: "INGENIERO EN SISTEMAS DE INFORMACIÓN",
      institution: "UTN - FACULTAD REGIONAL TUCUMAN",
      year: "2022",
      status: "Cursando primer año"
    },
    {
      title: "HUMANIDADES Y CIENCIAS SOCIALES",
      institution: "Esc sec barrio el mirador",
      year: "2021",
      status: "Graduado"
    }
  ];

  const certifications = [
    {
      title: "Desarrollo web full stack",
      institution: "Rolling Code Scholl",
      year: "2024",
      status: "Finalizado"
    },
    {
      title: "Curso de idioma japones",
      institution: "Doki doki japan",
      year: "2021",
      status: "Finalizado"
    },
    {
      title: "Técnico en arreglo de celulares y tablet",
      institution: "Ifet",
      year: "2019",
      status: "Finalizado"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-[#0C0C14] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mí</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-3xl font-bold mb-12">
            Soy un programador full stack con pasión por resolver problemas 
            </p>
            <p className="text-lg text-gray-300">
            Me apasiona crear experiencias únicas y expresar mi creatividad a través del código. Cuento con experiencia en el desarrollo de sitios web, aplicaciones, software y la automatización de procesos. Me mantengo constantemente actualizado con las últimas tendencias en desarrollo web para ofrecer soluciones innovadoras.            </p>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="inline-block bg-[#980094] px-8 py-3 rounded-full text-white font-semibold hover:bg-[#980094]/90 transition-colors cursor-pointer"
            >
              Contáctame
            </Link>            
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaGraduationCap className="icon" />
                Educación
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}  className="education  pl-4">
                    <h4 className="text-xl font-semibold icon">{edu.title}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year} - {edu.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <FaCertificate className="icon" />
                Capacitaciones
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="education pl-4">
                    <h4 className="text-xl font-semibold icon">{cert.title}</h4>
                    <p className="text-gray-400">{cert.institution}</p>
                    <p className="text-sm text-gray-500">{cert.year} - {cert.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;