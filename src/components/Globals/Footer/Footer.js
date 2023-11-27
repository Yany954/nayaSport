import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo.svg';
import { pathRoutes } from '../../../routes/PathRoutes';
import './Footer.css';

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
                            <li>Uniformes</li>
                            <li>Sudaderas</li>
                            <li>Accesorios</li>
                        </ul>
                   
                        <ul>
                            <li className='list-title'>Personalizados</li>
                            <li>Envianos tu diseño</li>
                            <li>Mas información</li>
                        </ul>

                </article>
                <article>
                    <Link to='/admin'>Admin</Link>
                </article>
            </section>
            <section className='footer-bottom'>
                <article>
                    <p>
                        <span className='footer-bottom-name'>NayaSport 2023 | </span>
                        <Link className='footer-bottom-link' to={pathRoutes.privacy}> Términos y condiciones</Link>
                    </p>
                </article>
                <article>
                    <p> Siguenos : </p>
                    <FacebookOutlinedIcon />

                </article>
            </section>
        </footer>
    )
}

export default Footer