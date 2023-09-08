import React, { useRef } from "react";
import "./AdminAddForm.css"; // Importa el archivo CSS
import Title from "../../Globals/Title/Title";

function AdminAddForm2() {
  const imageInputRef = useRef(null);

  const handleAddImageClick = () => {
    // Activa el input de imagen cuando se hace clic en "Agregar imagen"
    imageInputRef.current.click();
  };
  return (
    <section className="form-container">
      <form className="form-add">
        <section className="formAdd-title">
          <h2>AÑADIR PRODUCTO</h2>
        </section>
        <section className="section-ref-row">
          <input
            required
            type="text"
            placeholder="Referencia"
            name="ref"
            className="input-field-row"
          />
          <select required name="category" className="select-field">
            <option disabled>Categoria</option>
            <option value="1">Accesorios deportivos</option>
            <option value="2">Ropa deportiva</option>
          </select>
        </section>

        <input
          type="text"
          placeholder="Nombre del producto"
          name="productName"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Precio de adquisición"
          name="priceBuy"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Precio de venta"
          name="priceSale"
          className="input-field"
        />
        <section className="section-brand-row">
          <input
            type="text"
            placeholder="Dimensiones/ Tallaje"
            name="size"
            className="input-field-row"
          />
          <select name="brand" className="select-field">
            <option disabled>Marca</option>
            <option value="Kamila">Kamila</option>
            <option value="Molten">Molten</option>
          </select>
        </section>
        <textarea
          name="description"
          className="input-field"
          placeholder="Descripción del producto"
          rows="4"
          cols="50"
        ></textarea>
        <input name="image" type="file" accept=".png" className="input-image" />
        <button onClick={handleAddImageClick} className="formAdd-button1">
          Subir imagen
        </button>
        <section className="formAddButtonContainer">
          <button className="formAdd-button2">GUARDAR</button>
        </section>
      </form>
    </section>
  );
}

export default AdminAddForm2;
