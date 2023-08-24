import React from 'react'
import Title from '../components/Globals/Title/Title'
import RoundCard from "../components/Globals/RoundCard/RoundCard";
import Header from '../components/Globals/Header/Header';
import Footer from '../components/Globals/Footer/Footer';
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp';
import SquareCard from '../components/Globals/SquareCard/SquareCard';
import Slider from '../components/Uniforms/Slider';
import Search from '../components/Globals/Search/Search';
import Filter from '../components/Globals/Filters/Filter';
import AccesoriesGrid from '../components/Accesories/AccesoriesGrid';


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
