import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pathRoutes } from "./PathRoutes";
import Home from "../pages/Home";
import Uniforms from "../pages/Uniforms";
import Customers from "../pages/Customers";
import Contact from "../pages/Contact";
import Accesories from "../pages/Accesories";
import Uniform from "../pages/Uniform";
import PrivacyPolicies from "../pages/PrivacyPolicies";
import Custom from "../pages/Custom";
import Login from "../pages/Login";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardAdminAdd from "../pages/DashboardAdminAdd";
import DashboardAdminDelete from "../pages/DashboardAdminDelete";
import DashboardAdminUpdate from "../pages/DashboardAdminUpdate";

function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.home} Component={Home}></Route>
        <Route path={pathRoutes.uniforms} Component={Uniforms}></Route>
        <Route path={pathRoutes.accesories} Component={Accesories}></Route>
        <Route path={pathRoutes.customers} Component={Customers}></Route>
        <Route path={pathRoutes.contact} Component={Contact}></Route>
        <Route path={`${pathRoutes.uniform}/:id`} Component={Uniform}></Route>
        <Route path={pathRoutes.privacy} Component={PrivacyPolicies}></Route>
        <Route path={pathRoutes.custom} Component={Custom}></Route>
        <Route path={pathRoutes.login} Component={Login}></Route>
        <Route path={pathRoutes.admin} Component={DashboardAdmin}></Route>
        <Route path={pathRoutes.uniform} Component={Uniform}></Route>
        <Route path={pathRoutes.adminAdd} Component={DashboardAdminAdd}></Route>
        <Route path={pathRoutes.adminDelete} Component={DashboardAdminDelete}></Route>
        <Route path={pathRoutes.adminUpdate} Component={DashboardAdminUpdate}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;