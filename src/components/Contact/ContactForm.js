import React, { useState }  from 'react'
import './Contact.css'
import { Socialmedia } from '../../Models/SocialMedia'
import MailOutlineIcon from '../../assets/img/icons8-gmail-48.png';
import InstagramIcon from '../../assets/img/icons8-instagram-48.png';
import FacebookOutlinedIcon from '../../assets/img/icons8-facebook-48.png';
import Title from '../Globals/Title/Title';
function ContactForm() {
    const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      correo: '',
      celular: '',
      mensaje: '',
    });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      event.target.querySelector('button[type="submit"]').disabled = true;
      event.target.querySelector('button[type="submit"]').textContent = 'Enviando...';

  
      try {
        const response = await fetch('https://formsubmit.co/354adf7ac3f23e98449f4f9c828f01f9', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Éxito: el correo electrónico se envió correctamente
          // Puedes mostrar un mensaje de éxito o realizar otras acciones
          console.log('Correo electrónico enviado exitosamente');
        } else {
          // Error al enviar el correo electrónico
          // Maneja el error según sea necesario
          console.error('Error al enviar el correo electrónico');
        }
      } catch (error) {
        // Error en la solicitud POST
        // Maneja el error según sea necesario
        console.error('Error en la solicitud POST:', error);
      } finally {
        event.target.querySelector('button[type="submit"]').disabled = false;
        event.target.querySelector('button[type="submit"]').textContent = 'Enviar';
      }
    };
  
    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    return (
        <section class='contact'>
            <article className='contact-form-container'>
        <Title title='CONTÁCTANOS' />
        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            required
            type='text'
            placeholder='Nombre'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            required
            type='text'
            placeholder='Apellido'
            name='apellido'
            value={formData.apellido}
            onChange={handleChange}
          />
          <input
            required
            type='email'
            placeholder='Correo'
            name='correo'
            value={formData.correo}
            onChange={handleChange}
          />
          <input
          required
            type='tel'
            placeholder='Celular'
            name='celular'
            value={formData.celular}
            onChange={handleChange}
          />

          <textarea
            cols='50'
            rows='10'
            placeholder='Escribe tu mensaje'
            name='mensaje'
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>

          <button type='submit' className='contact-form-button'>
            Enviar
          </button>
          <input type="hidden" name="_autoresponse" value="Recibimos tu mensaje. Gracias por contactarte con nosotros"></input>
          </form>
      </article>
            <article class="contact-socialmedia-container">
            <Title title="INFORMACIÓN" />
                <div class="contact-socialmedia">
                <img src={FacebookOutlinedIcon} alt="Facebook" />
                    <a target='_blank' rel='noreferrer' href={Socialmedia.Facebook}>
                        {Socialmedia.Facebook}
                    </a>
                </div>
                <div class="contact-socialmedia">
                <img src={MailOutlineIcon} alt="Email" />
                    <a target='_blank' rel='noreferrer' href={`mailto:${Socialmedia.email}`}>
                        {Socialmedia.email}
                    </a>
                </div>
                <div class="contact-socialmedia">
                <img src={InstagramIcon} alt="Instagram" />
                    <a target='_blank' rel='noreferrer' href={Socialmedia.Instagram}>
                        {Socialmedia.Instagram}
                    </a>
                </div>
            </article>
            </section>
  );
}

export default ContactForm;