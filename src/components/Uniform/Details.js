import React from 'react';
import Title from '../Globals/Title/Title';
import './Uniform.css';
import Uniforme from '../../assets/img/UniformeEAN.svg';

function Details() {
  return (
    <section className='details'>
      <div className='section-image-tallas'>
      <div className='section'>
        <div className='image'>
          <article className='round-card'>
            <aside className='round-card-vector'>
                <img src={Uniforme} />
            </aside>
          </article>
        </div>
        <div className='price'>
          <span className='currency'>$</span>
          <span className='amount'>150.000</span>
        </div>
      </div>
      <div className='section-image-details'>
      <div className='section'>
        <div className='size'>
          <Title title='Tallas' />
          <div className='size-cards'>
            <div class="card">
              <h1>XS</h1>
            </div>
            <div class="card">
              <h1>S</h1>
            </div>
            <div class="card">
              <h1>M</h1>
            </div>
            <div class="card">
              <h1>L</h1>
            </div>
            <div class="card">
              <h1>XL</h1>
            </div>
            <div class="card">
              <h1>XXL</h1>
            </div>
            
          </div>
          
          
          <a className='section-guia-tallas' href="">&gt;&gt;Guía de tallas</a>
        </div>
        </div>
        </div>
        <div className='section'>
        <div className='uniform'>
          <Title title='Uniforme' />
          <div className='square-cards'>
          <div className='square-card'>
            <section className='square-card-img' >
                <img src={Uniforme} alt='uniforme' />
            </section>
            </div>
            <div className='square-card'>
            <section className='square-card-img' >
                <img src={Uniforme} alt='uniforme' />
            </section>
            </div>
            </div>
            </div>
        </div>
        
      <div className='section'>
      <div className='section-image-details'>
        <div className='section-btns'>
          
          <button className='btn'>+</button>
          <input type='number' className='quantity' />
          <button className='btn'>-</button>
        </div>
        <button className='add-btn'>Agregar</button>
        <div className='total-price'>
        <Title title='Total: ' />
        <span className='currency'>$</span>
          <span className='amount'>550.000</span>
        </div>
      </div>
      </div>
      </div>
      
    </section>
  );
}

export default Details;
