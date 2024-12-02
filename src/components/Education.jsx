function Education() {
  const education = [
    {
      title: "INGENIERIA EN SISTEMAS DE INFORMACIÓN",
      status: "Cursando primer año"
    },
    {
      title: "HUMANIDADES Y CIENCIAS SOCIALES",
      status: "Graduado"
    }
  ];

  const certifications = [
    {
      title: "Desarrollo web full stack",
      institution: "Rolling Code Scholl",
      year: "2024",
      status: "En curso"
    },
    {
      title: "Técnico en arreglo de celulares y tablet",
      institution: "Ifet",
      year: "2019",
      status: "Finalizado"
    }
  ];

  return (
    <section id="educación" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Educación y Capacitaciones</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Educación Formal</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md mb-4">
                <h4 className="text-xl font-semibold text-gray-800">{edu.title}</h4>
                <p className="text-gray-600">{edu.status}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Capacitaciones</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md mb-4">
                <h4 className="text-xl font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-gray-600">{cert.institution}</p>
                <p className="text-gray-500">{cert.year} - {cert.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;