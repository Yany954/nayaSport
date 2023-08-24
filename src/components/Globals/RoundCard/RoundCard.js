import React from 'react';
import Uniforme from '../../../assets/img/UniformeEAN.svg'
import './RoundCard.css'

function RoundCard() {
    return (
        <article className='round-card'>
            <aside className='round-card-vector'>
                <img src={Uniforme} />
            </aside>
            <aside className='round-card-'>
                <h2 className='round-card-description'>Lorem Ipsum</h2>
                <h3 className='round-card-price'>$20.000</h3>
            </aside>
        </article>
    )
}

export default RoundCard