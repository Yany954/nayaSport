import React from 'react'
import Header from '../components/Globals/Header/Header'
import Footer from '../components/Globals/Footer/Footer'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'
import ContactForm from '../components/Contact/ContactForm'

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
