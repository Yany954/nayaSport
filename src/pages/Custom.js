import React from 'react'
import CustomForm from '../components/Custom/CustomForm'
import Title from '../components/Globals/Title/Title'
import Header from '../components/Globals/Header/Header'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'
import Footer from '../components/Globals/Footer/Footer'

function Custom() {
  return (
    <div className='background-custom'>
      <Header />
      
    

      <CustomForm />
      <Title
        color="white"
        title="!Lleva tu estilo a otro nivel!
        destacando entre la multitud en la cancha."
      />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Custom