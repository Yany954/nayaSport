import React, { useRef, useState } from "react";
import axios from "axios"; // Importa Axios
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
