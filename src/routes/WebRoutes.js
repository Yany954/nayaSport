import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pathRoutes } from "./PathRoutes";
import Home from "../pages/Home";
import Uniforms from "../pages/Uniforms";
import Offers from "../pages/Offers";
import Sizes from "../pages/Sizes";


function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.home} Component={Home}></Route>
        <Route path={pathRoutes.uniforms} Component={Uniforms}></Route>
        <Route path={pathRoutes.offers} Component={Offers}></Route>
        <Route path={pathRoutes.sizes} Component={Sizes}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;
