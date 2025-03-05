import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import '../css/Contact.css'; // Asegúrate de importar el archivo CSS

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });

  const serviceId = 'service_4ejfj0n';
  const templateId = 'template_wa7zacz';  
  const apiKey = 'he53Jhp8NN5s-yWEG';

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    emailjs
      .sendForm(serviceId, templateId, formRef.current, apiKey)
      .then(() => {
        setStatus({ message: '¡Mensaje enviado con éxito!', type: 'success' });
        formRef.current.reset();

        // Mostrar SweetAlert2 de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: 'Tu mensaje ha sido enviado correctamente.',
          confirmButtonText: 'Aceptar',
        });
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        setStatus({ message: 'Hubo un error al enviar el mensaje.', type: 'error' });

        // Mostrar SweetAlert2 de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.',
          confirmButtonText: 'Aceptar',
        });
      });
  };

  return (
    <section id="contacto" className="contact-container py-20 bg-[#0C0C14] text-white">
      <div className="container mx-auto px-6">
        <h2 className="title text-3xl font-bold mb-12">Contáctame</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Siempre disponible para trabajos independientes o de tiempo completo si surge el proyecto adecuado. No dudes en contactarme.</p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form space-y-6">
            <div className="form-row">
              <input
                type="text"
                name="user_name"
                placeholder="Nombre *"
                required
                className="input-field"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email *"
                required
                className="input-field"
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Su mensaje *"
              required
              className="input-field full-width"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className="submit-button"
            >
              Enviar Mensaje
            </button>
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