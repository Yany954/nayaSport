import React from 'react';
import Footer from '../components/Globals/Footer/Footer';
import Header from '../components/Globals/Header/Header';
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp';
import Details from '../components/Uniform/Details';
import GET_ProductById from '../services/Products/GET_ProductById';

function Uniform() {

  return (
    <div className='container-background'>
      <Header />
      <Details />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Uniform