import React from 'react';

import DashboardAddForm from '../components/Admin/AdminDashboard/DashboardAdd/DashboardAdd';
import AdminLayout from '../components/Admin/AdminLayout/AdminLayout';

function DashboardAdminAdd() {



  return (
    <div className='container-background'>

      <AdminLayout component={<DashboardAddForm/>} />

    </div>
  )
}

export default DashboardAdminAdd