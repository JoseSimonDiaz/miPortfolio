import '../css/experience.css'

function Experience() {
  const experiences = [
    {
      title: "Guardia de Seguridad - TopWard",
      period: "Noviembre 2021 - Enero 2022",
      responsibilities: [
        "Monitoreo y control desde la central para garantizar el cumplimiento de los servicios asignados, verificando la llegada puntual y correcta de los guardias a sus objetivos",
        "Desempeño en entornos diversos como Sancord Salud, Oscard Barbieri y complejos de departamentos, asegurando la seguridad y satisfacción del cliente",
        "Resolución efectiva de problemas en situaciones críticas, demostrando atención al detalle y capacidad de reacción"
      ]
    },
    {
      title: "Emprendedor Familiar",
      period: "Desde 2013 - Actualidad",
      responsibilities: [
        "Gestión integral de pedidos: recepción, fijación de precios y registro de datos de clientes, asegurando un servicio personalizado y eficiente",
        "Atención al público con enfoque en la calidad del servicio y satisfacción del cliente",
        "Ventas y asesoramiento personalizado"
      ]
    },
    {
      title: "Ventas y Atención al Público",
      period: "Experiencia Continua",
      responsibilities: [
        "Experiencia sólida en atención al cliente y asesoramiento en ventas, garantizando una experiencia profesional y adaptada a las necesidades de cada persona"
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-[#0C0C14] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Experiencia Laboral</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#10101A] rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold titulo">{exp.title}</h3>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;