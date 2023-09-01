import React, { useEffect, useState } from "react";
import GET_AllProducts from "../../../services/Products/GET_AllProducts";
import axios from "axios";

function AdminAddForm() {
 
  /*{orders &&
        orders.map((product, i) => (
          <div key={i}>
            <p>{product.nombre}</p>
            <p>{product.estado}</p>
            <img
              src={require(`../../../assets/img/${product.imagen}`)}
              alt="img"
            ></img>
          </div>
        ))}*/
  
  function onSubmit() {}

  return (
    <div>
      

      <form onSubmit={onSubmit}>
        <select>
          <option value="1">Accesorios deportivos</option>
          <option value="2">Ropa deportiva</option>
        </select>
        <input type="text" placeholder="Nombre del producto" />
        <input type="text" placeholder="Precio de adquisición" />
        <input type="text" placeholder="precio de venta" />
        <input type="text" placeholder="Dimensiones/ tallaje" />
        <textarea></textarea>
      </form>
    </div>
  );
}

export default AdminAddForm;
