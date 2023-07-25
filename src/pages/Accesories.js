import React from 'react'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'
import Header from '../components/Globals/Header/Header'
import Footer from '../components/Globals/Footer/Footer'
import SubMenu from '../components/Globals/Header/SubMenu'

function Accesories() {
  return (
    <div className='container-background'>
      <Header />
      <SubMenu />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Accesories
