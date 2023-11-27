import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from 'react';
import { Socialmedia } from '../../Models/SocialMedia';
import Title from '../Globals/Title/Title';
import './Contact.css';

function ContactForm() {
    return (
        <section class='contact'>
            <article class="contact-form-container">
                <Title title="CONTÁCTANOS" />
                <form class="contact-form">

                    <input required type="text" placeholder="Nombre" />
                    <input required type="text" placeholder="Apellido" />
                    <input required type='email' placeholder='Correo' />
                    <input required type='tel' placeholder='Celular' />

                    <textarea cols="50" rows="10" placeholder="Escribe tu mensaje"></textarea>

                    <button form='contactForm' type="submit" class="contact-form-button">
                        Enviar
                    </button>
                </form>
            </article>
            <article class="contact-socialmedia-container">
            <Title title="INFORMACIÓN" />
                <div class="contact-socialmedia">
                    <FacebookOutlinedIcon />
                    <a target='_blank' href={Socialmedia.Facebook}>
                        {Socialmedia.Facebook}
                    </a>
                </div>
                <div class="contact-socialmedia">
                    <MailOutlineIcon />
                    <a target='_blank' href={`mailto:${Socialmedia.email}`}>
                        {Socialmedia.email}
                    </a>
                </div>
                <div class="contact-socialmedia">
                    <InstagramIcon />
                    <a target='_blank' href={Socialmedia.Instagram}>
                        {Socialmedia.Instagram}
                    </a>
                </div>
            </article>
        </section>
    )
}

export default ContactForm