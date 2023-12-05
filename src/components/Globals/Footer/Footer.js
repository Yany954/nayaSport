import React from 'react';
import Logo from '../../../assets/img/logo.svg';
import './Footer.css';
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer>
            <section className='footer-top'>
                <article className='footer-top-logo'>
                    <img src={Logo} alt='logo' />
                </article>

                <article className='footer-top-menu'>
                    <ul>
                        <li className='list-title'>Tienda Virtual</li>
                        <li className='list-item'>Uniformes</li>
                        <li className='list-item'>Sudaderas</li>
                        <li className='list-item'>Accesorios</li>
                    </ul>
                    <ul>
                        <li className='list-title'>Personalizados</li>
                        <li className='list-item'>Envíanos tu diseño</li>
                        <li className='list-item'>Más información</li>
                    </ul>
                </article>
                <article>
                    <button className="footer-button" component={Link} to='/admin' >
                        Admin
                    </button>
                </article>
            </section>
            <section className='footer-bottom'>
                <article>
                    <p>
                        <span className='footer-bottom-name'>NayaSport 2023 </span>
                        <Link className='footer-bottom-link' to='/politicas'>| Términos y condiciones</Link>
                    </p>
                </article>
               
                <article className='footer-siguenos'>
                    <p> Síguenos : </p>
                    <FacebookOutlinedIcon />
                    <MailOutlinedIcon />
                    <InstagramIcon />

                </article>
            </section>
        </footer>
    )
}

export default Footer;
