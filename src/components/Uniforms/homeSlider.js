import { React, useEffect, useState } from "react";
import imagen1 from "../../assets/img/sliderDeporte_1.jpeg";
import imagen2 from "../../assets/img/sliderDeportes_2.png";
import imagen3 from "../../assets/img/slideDeporte_3.jpeg";
import imagen4 from "../../assets/img/slideDeporte_4.jpeg";
import imagen5 from "../../assets/img/sliderDeporte_5.jpg";
import imagen6 from "../../assets/img/sliderDeporte_6.jpg";
import "./homeSlider.css"

const HomeSlider = () => {
  return (
    <div class="image-container">
      <img src={imagen1} alt="Imagen 1" className="image" />
      <img src={imagen2} alt="Imagen 2" className="image expanded" />
      <img src={imagen3} alt="Imagen 3" className="image" />
      <img src={imagen4} alt="Imagen 4" className="image" />
      <img src={imagen5} alt="Imagen 5" className="image" />
      <img src={imagen6} alt="Imagen 6" className="image" />
    </div>
  );
};
export default HomeSlider;