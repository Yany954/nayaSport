import React from "react";
import DashboardUpdate from "../components/Admin/AdminDashboard/DashboardUpdate/DashboardUpdate";
import AdminLayout from "../components/Admin/AdminLayout/AdminLayout";



function DashboardAdminUpdate() {
  

  return (
    <div className='container-background'>

    <AdminLayout component={<DashboardUpdate />} />

  </div>
    
  );
}

export default DashboardAdminUpdate;
