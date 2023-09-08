import React from "react";
import "./RoundCard.css";

function RoundCard({ imgPath, product, price }) {
  console.log(imgPath);
  return (
    <article className="round-card">
      <aside className="round-card-vector">
        <img  src={imgPath} alt="img" />
      </aside>
      <aside className="round-card-">
        <h2 className="round-card-description">{product}</h2>
        <h3 className="round-card-price">{price}</h3>
      </aside>
    </article>
  );
}

export default RoundCard;
