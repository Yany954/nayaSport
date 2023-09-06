import React from "react";


function AdminAddForm() {

  return (
    <div>
      <form >
        <input
          required
          type="text"
          placeholder="Referencia"
          name="ref"
         
        />
        <select required name='category' >
          <option disabled>Categoria</option>
          <option value="1">Accesorios deportivos</option>
          <option value="2">Ropa deportiva</option>
        </select>
        <select name='brand' onChange={HandleChange}>
          <option disabled>Marca</option>
          <option value="Kamila">Kamila</option>
          <option value="Molten">Molten</option>
        </select>
        <input
          type="text"
          placeholder="Nombre del producto"
          name="productName"
          
        />
        <input
          type="text"
          placeholder="Precio de adquisición"
          name="priceBuy"
          
        />
        <input
          type="text"
          placeholder="precio de venta"
          name="priceSale"
        
        />

        <input
          type="text"
          placeholder="Dimensiones/ tallaje"
          name="size"
          
        />

        <textarea
          name="description"
        
        ></textarea>

        <input
          name="image"
          type="file"
          accept=".png"
        />

        <button>Agregar</button>
      </form>
    </div>
  );
}

export default AdminAddForm;
