import React from 'react'
import Logo from '../../../assets/img/UniformeEAN.svg'
import './SquareCard.css'

function SquareCard() {
    return (
        <div className='square-card'>
            <section className='square-card-img' >
                <img src={Logo} alt='uniforme' />
            </section>
            <section className=''>
                <button className='square-card-btn'>+</button>
            </section>
        </div>
    )
}

export default SquareCard