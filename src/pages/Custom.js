import React from 'react'
import CustomForm from '../components/Custom/CustomForm'
import Footer from '../components/Globals/Footer/Footer'
import Header from '../components/Globals/Header/Header'
import Title from '../components/Globals/Title/Title'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'

function Custom() {
  return (
    <div className='background-custom'>
      <Header />
      <Title
        color="white"
        title="!Lleva tu estilo a otro nivel!
        destacando entre la multitud en la cancha."
      />
      <CustomForm />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Custom