import React from "react";
import Header from "../components/Globals/Header/Header";
import Button from "../components/Globals/Button/Button";

function Home() {
  return(
    <div className="container">
        <Header />
        <Button text='Personalizado' />
        <Button text='Tienda Virtual' />
    </div>

  ) 
}

export default Home;
