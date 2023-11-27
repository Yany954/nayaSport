import React from 'react'
import AccesoriesGrid from '../components/Accesories/AccesoriesGrid'
import Filter from '../components/Globals/Filters/Filter'
import Footer from '../components/Globals/Footer/Footer'
import Header from '../components/Globals/Header/Header'
import SubMenu from '../components/Globals/Header/SubMenu'
import SearchBox from '../components/Globals/Search/Search'
import WhatsApp from '../components/Globals/WhatsApp/WhatsApp'

function Accesories() {
  return (
    <div className='container-background'>
      <Header />
      <SubMenu />
      <SearchBox />
      <Filter />
      <AccesoriesGrid />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Accesories
