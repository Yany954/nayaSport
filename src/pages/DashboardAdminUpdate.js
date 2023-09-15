import React, { useRef, useState } from "react";
import axios from "axios"; // Importa Axios
import DashboardUpdate from "../components/Admin/AdminDashboard/DashboardUpdate/DashboardUpdate";



function AdminAddForm2() {
  const imageInputRef = useRef(null);
  const [formData, setFormData] = useState({
    ref: "",
    category: "",
    productName: "",
    priceBuy: "",
    priceSale: "",
    size: "",
    brand: "",
    description: "",
    image: null,
  });

  const handleAddImageClick = () => {
    // Activa el input de imagen cuando se hace clic en "Agregar imagen"
    imageInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/agregar_producto", formData);
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put("/api/actualizar_producto", formData);
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al actualizar producto:", error);
    }
  };

  return (
    <section className="form-container">
      <DashboardUpdate />
      <form className="form-add" onSubmit={handleSubmit}>
        <section className="formAdd-title">
          <h2>AÑADIR PRODUCTO</h2>
        </section>
        <section className="section-ref-row">
          {/* Campos de entrada aquí con onChange y value */}
        </section>

        {/* Resto de los campos de entrada aquí, cada uno con onChange y value */}

        <input
          name="image"
          type="file"
          accept=".png"
          className="input-image"
          onChange={handleInputChange}
        />
        <button onClick={handleAddImageClick} className="formAdd-button1">
          Subir imagen
        </button>
        <section className="formAddButtonContainer">
          <button type="submit" className="formAdd-button2">
            GUARDAR
          </button>
          <button onClick={handleUpdate} className="formAdd-button2">
            ACTUALIZAR
          </button>
        </section>
      </form>
    </section>
  );
}

export default AdminAddForm2;
