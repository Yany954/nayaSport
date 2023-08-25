import React from 'react'
import './Home.css'
import Button from "../Globals/Button/Button";
import { pathRoutes } from '../../routes/PathRoutes';
import RoundCard from '../Globals/RoundCard/RoundCard';
import SliderHome from '../Globals/Slider/SliderHome';

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