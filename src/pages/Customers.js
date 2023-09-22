import React from 'react'
import AccordionFAQS from '../components/Customers/AccordionFAQS'
import Footer from '../components/Globals/Footer/Footer'
import Header from '../components/Globals/Header/Header'
import Title from '../components/Globals/Title/Title'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'


function Customers() {
  return (
    <div className='container-background'>
      <Header />
      <Title title='Preguntas Frecuentes' />
      <AccordionFAQS />
      <Footer /> 
      <WhatsApp />
    </div>
  )
}

export default Customers
