import React from 'react'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'
import Header from '../components/Globals/Header/Header'
import Footer from '../components/Globals/Footer/Footer'
import SubMenu from '../components/Globals/Header/SubMenu'
import AccesoriesGrid from '../components/Accesories/AccesoriesGrid'
import Filter from '../components/Globals/Filters/Filter'
import Navbar from '../components/Admin/AdminNavbar/Navbar'

function Accesories() {
  return (
    <div className='container-background'>
      <Header />
      <SubMenu />
      <AccesoriesGrid />
      <Filter />
      <Navbar />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Accesories
