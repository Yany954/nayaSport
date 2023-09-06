import React from "react";


function AdminAddForm() {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          required
          type="text"
          placeholder="Referencia"
          name="ref"
          onChange={HandleChange}
          value={product.ref}
        />
        <select required name='category' onChange={HandleChange}>
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
          onChange={HandleChange}
          value={product.productName}
        />
        <input
          type="text"
          placeholder="Precio de adquisición"
          name="priceBuy"
          onChange={HandleChange}
          value={product.priceBuy}
        />
        <input
          type="text"
          placeholder="precio de venta"
          name="priceSale"
          onChange={HandleChange}
          value={product.priceSale}
        />

        <input
          type="text"
          placeholder="Dimensiones/ tallaje"
          name="size"
          onChange={HandleChange}
          value={product.size}
        />

        <textarea
          name="description"
          onChange={HandleChange}
          value={product.description}
        ></textarea>

        <input
          name="image"
          type="file"
          accept=".png"
          value={product.image}
          onChange={HandleChange}
        />

        <button>Agregar</button>
      </form>
    </div>
  );
}

export default AdminAddForm;
