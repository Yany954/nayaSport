import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accesories from "../pages/Accesories";
import Contact from "../pages/Contact";
import Custom from "../pages/Custom";
import Customers from "../pages/Customers";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardAdminAdd from "../pages/DashboardAdminAdd";
import DashboardAdminDelete from "../pages/DashboardAdminDelete";
import DashboardAdminUpdate from "../pages/DashboardAdminUpdate";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivacyPolicies from "../pages/PrivacyPolicies";
import Uniform from "../pages/Uniform";
import Uniforms from "../pages/Uniforms";
import { pathRoutes } from "./PathRoutes";

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
        <Route path={`${pathRoutes.adminUpdate}/:id`} Component={DashboardAdminUpdate}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;