import React from 'react'
import Header from '../components/Globals/Header/Header'
import Footer from '../components/Globals/Footer/Footer'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'
import AccordionFAQS from '../components/Customers/AccordionFAQS'
import Title from '../components/Globals/Title/Title'


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
