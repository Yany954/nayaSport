import React from 'react';
import { pathRoutes } from '../../routes/PathRoutes';
import Button from "../Globals/Button/Button";
import SliderHome from '../Globals/Slider/SliderHome';
import './Home.css';

function Section1() {
    return (
        <section className="home-section1">
            <SliderHome />
            <article className='home-section1-info'>
                <h1 className="home-title">NayaSport</h1>
                <aside className='home-section1-info-btn'>
                    <Button path={pathRoutes.login} text='Admin' />
                    <Button path={pathRoutes.uniforms} text='Tienda Virtual' />
                </aside>
            </article>
        </section>
    )
}

export default Section1