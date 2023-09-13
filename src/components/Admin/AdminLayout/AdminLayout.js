import React from 'react'
import Navbar from '../AdminNavbar/Navbar'
import './AdminLayout.css'

function AdminLayout({component}) {
    console.log(component)
    return (
    <div className='admin-layout'>
        <Navbar className='layout-navbar' />
        {component}
    </div>
  )
}

export default AdminLayout