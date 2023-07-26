import React from 'react'
import './Home.css'
import Button from "../Globals/Button/Button";
import { pathRoutes } from '../../routes/PathRoutes';

function Section1() {
    return (
        <section className="home-section1">
            <img className="home-section1-gif" src="https://2.bp.blogspot.com/-EFtj8FJi6Rw/WG1ptITix7I/AAAAAAABFeY/NxFCLxeJwLo7OrqoIUtHYiCeIZVIE9sswCLcB/s550/nike-chelsea-17-18-concept-kits%2B%25281%2529.gif" />
            <article className='home-section1-info'>
                <h1 className="home-title">NayaSport</h1>
                <aside className='home-section1-info-btn'>
                    <Button path={pathRoutes.custom} text='Personalizado' />
                    <Button path={pathRoutes.uniforms} text='Tienda Virtual' />
                </aside>
            </article>
        </section>
    )
}

export default Section1