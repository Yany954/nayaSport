import React from 'react'
import Title from '../components/Globals/Title/Title'
import RoundCard from "../components/Globals/RoundCard/RoundCard";
import Header from '../components/Globals/Header/Header';
import Footer from '../components/Globals/Footer/Footer';
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp';
import SquareCard from '../components/Globals/SquareCard/SquareCard';
import Slider from '../components/Uniforms/Slider';
import HomeSlider from '../components/Uniforms/homeSlider';


function Uniforms() {
  return (
    <div className='container-background'>
      <Header />
      <Title  title='UNIFORMES' />
      <HomeSlider />
      <RoundCard />
      <SquareCard />
      <Title  title='También te puede interesar' />
      <Slider />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Uniforms
