import React, { useEffect, useState } from "react";
import Title from "../Globals/Title/Title";
import "./Uniform.css";
import Uniforme from "../../assets/img/UniformeEAN.svg";
import { useParams } from 'react-router-dom';
import GET_ProductById from "../../services/Products/GET_ProductById";


function Details() {


  const { id } = useParams();
  console.log(id)

  /* const [product, setProduct] = useState(GET_ProductById({ id }))
   const [tallas, setTallas] = useState();
   console.log(product.dimensiones)
   console.log(product,tallas)
 
   function fc() {
     
     console.log(product.dimensiones)
 
     const tallasDisponibles = product.dimensiones.split('/')
     console.log(tallasDisponibles)
     setTallas(tallasDisponibles);
   }
 
   fc();
   {product.dimensiones && product.dimensiones.map((talla, i) => (
    <div key={i} className="card">
      <h1>{talla[i]}</h1>
    </div>
  ))}
  */



  const [product, setProduct] = useState({})
  console.log(product)



  const request_API = async () => {
    GET_ProductById({ id }).then(function (response) {
      console.log(response.data);
      setProduct(response.data)
    }).catch(function (error) {
      console.error(error);
      setProduct(error)
    });
  }


  useEffect(() => {
    request_API();
  }, [])

  return (
    product &&
    <section className="details">
      <div className="section-image-tallas">
        <div className="section">
          <div className="image">
            <article className="round-card">
              <aside className="round-card-vector">
              </aside>
            </article>
          </div>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">{product.precio_venta}</span>
          </div>
        </div>
      </div>
      <div className="section-image-details">
        <div className="section">
          <div className="size">
            <Title title="Tallas" />
            <div className="size-cards">
               <div className="card">
                  <h1>{product.dimensiones}</h1>
                </div>
              <a className="section-guia-tallas" href="">
                Guía de tallas
              </a>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="uniform">
            <Title title="Uniforme" />
            <div className="square-cards">
              <div className="square-card">
                <section className="square-card-img">
                  <img src={Uniforme} alt="uniforme" />
                </section>
              </div>
              <div className="square-card">
                <section className="square-card-img">
                  <img src={Uniforme} alt="uniforme" />
                </section>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-btns">
              <button className="btn">+</button>
              <input type="text" className="quantity" />
              <button className="btn">-</button>
            </div>
            <button className="add-btn">Agregar</button>
            <div className="total-price">
              <Title title="Total: " />
              <span className="currency">$</span>
              <span className="amount">550.000</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Details;
