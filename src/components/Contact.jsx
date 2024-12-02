import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });
  // console.log(formRef.current);
  
  const serviceId = 'service_4ejfj0n';
  const templateId = 'template_wa7zacz';  
  const apiKey = 'he53Jhp8NN5s-yWEG';


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    // Llama a emailjs después de verificar
    emailjs
      .sendForm(serviceId, templateId, formRef.current, apiKey)
      .then(() => {
        setStatus({ message: '¡Mensaje enviado con éxito!', type: 'success' });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        setStatus({ message: 'Hubo un error al enviar el mensaje.', type: 'error' });
      });
  };
  
  

  return (
    <section id="contacto" className="py-20 bg-[#0C0C14] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctame</h2>
        <div className="max-w-md mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#1A1A2E] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label  htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#1A1A2E] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#1A1A2E] border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#980094] hover:bg-[#98009375] text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Enviar Mensaje
            </button>
            {/* <input type="submit" value="Send" /> */}
            {status.message && (
              <p className={`text-center ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-blue-400'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;