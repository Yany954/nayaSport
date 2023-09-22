import { CloudUpload } from "@mui/icons-material";
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { default as React, useRef, useState } from "react";
import Swal from "sweetalert2";
import { base_API } from "../../../services/configAPI";
import Title from "../../Globals/Title/Title";
import './AdminAddForm.css';

function AdminAddForm() {

  const imageInputRef = useRef(null);
  
  const handleAddImageClick = () => {
    imageInputRef.current.click();
  };

  const [imageFile, setImageFile] = useState();

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      
      console.log("Archivo seleccionado:", selectedFile);
      
      const reader = new FileReader();
      reader.onload = () => {
        const blob = new Blob([reader.result], { type: file.type });
        console.log(blob)
        setImageFile(blob);

        const read = reader.readAsArrayBuffer(file);
        console.log(read)
      };

    }
  };

  console.log(imageFile,typeof(imageFile))

  const [product, setProduct] = useState({
    ref: '',
    priceBuy: '',
    priceSale: '',
    size: '',
    productName: '',
    description: '',
    brand: '',
    category: ''
  });

  function HandleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,

    });
  }

  console.log(product.ref, product.image)
  console.log(product)


  const [productres, setProductres] = useState({});
  console.log(productres)

  function onSubmit(e) {
    e.preventDefault();

    const request_API = async () => {
      const request_URL = `${base_API.api}/productos`;

      const options = {
        method: 'POST',
        url: request_URL,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: {
          "referencia": product.ref,
          "precio_int": product.priceBuy,
          "precio_venta": product.priceSale,
          "imagen": imageFile,
          "dimensiones": product.size,
          "nombre": product.productName,
          "descripcion": product.description,
          "marca": product.brand,
          "Categoria_idCategoria": product.category
        }
      };

      return axios.request(options)
    }

    request_API().then(function (response) {
      console.log(response.data);
      setProductres(response.data)

      if (response.status == 200) {

        Swal.fire({
          icon: 'success',
          title: 'Producto añadido',
          text: 'Producto añadido con exito',
        })
        setProduct({
          ref: '',
          priceBuy: '',
          priceSale: '',
          image: '',
          size: '',
          productName: '',
          description: '',
          brand: '',
          category: ''
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se ha podido añadir el producto',
        })
      }
    }).catch(function (error) {
      console.error(error);
      setProductres(error)
    });

  }

  return (
    <Container fullWidth >
       {blob && (
        <div>
          <p>Archivo cargado como Blob:</p>
          <a href={URL.createObjectURL(blob)} download="archivo.png">
            Descargar Blob
          </a>
        </div>
      )}
     
        <Title title="Añadir producto" />
        <form className="form-container" onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Referencia"
                placeholder="Referencia"
                name="ref"
                onChange={HandleChange}
                value={product.ref}
              />
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select
                required
                name="category"
                onChange={HandleChange}
              >
                <MenuItem disabled>Categoria</MenuItem>
                <MenuItem value="1">Accesorios deportivos</MenuItem>
                <MenuItem value="2">Ropa deportiva</MenuItem>
              </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Nombre del producto"
                placeholder="Nombre del producto"
                name="productName"
                onChange={HandleChange}
                value={product.productName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Precio de adquisición"
                placeholder="Precio de adquisición"
                name="priceBuy"
                onChange={HandleChange}
                value={product.priceBuy}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Precio de venta"
                placeholder="Precio de venta"
                name="priceSale"
                onChange={HandleChange}
                value={product.priceSale}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Marca</InputLabel>
                <Select
                  name="brand"
                  onChange={HandleChange}
                >
                  <MenuItem disabled>Marca</MenuItem>
                  <MenuItem value="Kamila">Kamila</MenuItem>
                  <MenuItem value="Molten">Molten</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Dimensiones/ Tallaje"
                placeholder="Dimensiones/ Tallaje"
                name="size"
                onChange={HandleChange}
                value={product.size}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                label="Descripción del producto"
                placeholder="Descripción del producto"
                name="description"
                rows={4}
                onChange={HandleChange}
                value={product.description}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                ref={imageInputRef}
                name="image"
                type="file"
                accept=".png"
                style={{ display: "none" }}
                onChange={handleImageChange}

              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<CloudUpload />}
                onClick={handleAddImageClick}
              >
                Subir imagen
              </Button>
            </Grid>
            <Grid item xs={12}>
              <button variant="contained" color="primary">
                GUARDAR
              </button>
            </Grid>
          </Grid>
        </form>
     
    </Container>

  );
}

export default AdminAddForm;
