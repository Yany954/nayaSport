import React, { useEffect, useState } from "react";
import Title from "../Globals/Title/Title";
import "./Uniform.css";
import { useParams } from 'react-router-dom';
import GET_ProductById from "../../services/Products/GET_ProductById";

function Details() {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  const request_API = async () => {
    GET_ProductById({ id })
      .then(function (response) {
        const blob = new Blob([new Uint8Array(response.data.imagen.data)], {
          type: "image/png",
        });
        const url = URL.createObjectURL(blob);

        setImageUrl(url);
        setProduct(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setProduct(error);
      });
  };

  useEffect(() => {
    request_API();
  }, [id]);

  // Función para calcular el total
  function calculateTotal() {
    const totalPrice = product.precio_venta * quantity;
    return Number.isInteger(totalPrice) ? totalPrice : totalPrice.toFixed(2);
  }

  // Función para separar las tallas
  function getTallas() {
    if (product.dimensiones) {
      return product.dimensiones.split('/');
    }
    return [];
  }

  return (
    <section className="details">
      <div className="section-image-tallas">
        <div className="section">
          <div className="image">
            <article className="round-card">
              <aside className="round-card-vector">
                {imageUrl && (
                  <img className="img-form" src={imageUrl} alt="img" />
                )}
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
              {getTallas().map((talla, index) => (
                <div className="card" key={index}>
                  <h1>{talla}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section">
            <div className="section-btns">
              <button className="btn" onClick={() => setQuantity(quantity - 1)}>-</button>
              <input
                type="number"
                className="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-btn">Agregar</button>
            <div className="total-price">
              <Title title="Total: " />
              <span className="currency">$</span>
              <span className="amount">{calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
