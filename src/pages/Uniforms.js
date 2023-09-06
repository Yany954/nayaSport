import React from 'react';
import AccesoriesGrid from '../components/Accesories/AccesoriesGrid';
import Filter from '../components/Globals/Filters/Filter';
import Footer from '../components/Globals/Footer/Footer';
import Header from '../components/Globals/Header/Header';
import Search from '../components/Globals/Search/Search';
import SquareCard from '../components/Globals/SquareCard/SquareCard';
import Title from '../components/Globals/Title/Title';
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp';
import Slider from '../components/Uniforms/Slider';


function Uniforms() {
  return (
    <div className='container-background'>
      <Header />
      <Search />
      <Title  title='UNIFORMES' />
      <Filter />
      <AccesoriesGrid />
      <SquareCard />
      <Title  title='También te puede interesar' />
      <Slider />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Uniforms
