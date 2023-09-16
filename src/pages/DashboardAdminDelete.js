import React from 'react'
import DashboardDeleteForm from '../components/Admin/AdminDashboard/DashboardDelete/DashboardDeleteForm'
import AdminLayout from '../components/Admin/AdminLayout/AdminLayout'

function DashboardAdminDelete() {
  return (
    <div className='container-background'>
      

      <AdminLayout component={<DashboardDeleteForm/>} />

    </div>
  )
}

export default DashboardAdminDelete