import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Globals/Footer/Footer'
import Header from '../components/Globals/Header/Header'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'

function Contact() {
  return (
    <div className='container-background'>
      <Header />
      <ContactForm />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Contact
