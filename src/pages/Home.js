import React from "react";
import Header from "../components/Globals/Header/Header";
import WhatsApp from "../components/Globals/WhatsApp/WhatsApp";
import Section1 from "../components/Home/Section1";

function Home() {
  return (
    <div className="container">
      <Header />
      <Section1 />
      <WhatsApp />
    </div>

  )
}

export default Home;
