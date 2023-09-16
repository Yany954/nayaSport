import React, { useEffect, useRef, useState } from "react";
import "./DashboardUpdate.css";
import GET_AllProducts from "../../../../services/Products/GET_AllProducts";
import { useParams } from "react-router";
import GET_ProductById from "../../../../services/Products/GET_ProductById";
import "../../../Admin/Admin.css";
import { CloudUpload } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { base_API } from "../../../../services/configAPI";
import Swal from "sweetalert2";
import axios from "axios";
import Title from "../../../Globals/Title/Title";

function DashboardUpdate() {
  const imageInputRef = useRef(null);

  const handleAddImageClick = () => {
    imageInputRef.current.click();
  };

  const { id } = useParams();

  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState();
  const [product, setProduct] = useState({
    ref: "",
    priceBuy: "",
    priceSale: "",
    size: "",
    productName: "",
    description: "",
    brand: "",
    category: "",
  });

  const [productUpdate, setProductUpdate] = useState({
    ref: "",
    priceBuy: "",
    priceSale: "",
    size: "",
    productName: "",
    description: "",
    brand: "",
    category: "",
  });

  function HandleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  const request_API = async () => {
    GET_ProductById({ id })
      .then(function (response) {
        const blob = new Blob([new Uint8Array(response.data.imagen.data)], {
          type: "image/png",
        });
        const url = URL.createObjectURL(blob);

        setImageUrl(url);
        setProduct(response.data);
        setProductUpdate(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setProduct(error);
      });
  };

  useEffect(() => {
    request_API();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const blob = new Blob([reader.result], { type: file.type });
        setImageFile(blob);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const data = {
    referencia: product.ref,
    precio_int: product.priceBuy,
    precio_venta: product.priceSale,
    imagen: product.imagen,
    dimensiones: product.size,
    nombre: product.productName,
    descripcion: product.description,
    marca: product.brand,
    Categoria_idCategoria: product.category,
  };

  function onSubmit(e) {
    e.preventDefault();

    const request_API_UPDATE = async () => {
      const request_URL = `${base_API.api}/productos/${id}`;

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      return axios.put(request_URL, data, options);
    };

    request_API_UPDATE()
      .then(function (response) {
        if (response.status == 200 || response.status == 201) {
          Swal.fire({
            icon: "success",
            title: "Producto actualizado",
            text: "Producto actualizado con éxito",
          });

          setTimeout(() => {
            window.location.reload(true);
          }, 5000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se ha podido actualizar el producto",
          });
        }
      })
      .catch(function (error) {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se ha podido actualizar el producto",
        });
      });
  }

  return (
    <Container fullWidth>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <Title title="Actualizar producto" />
        <form className="form-container-update" onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <section className="centered-info">
                <div className="info-item">
                  <span className="info-label">Referencia:</span>
                  <span className="info-value">{product.referencia}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Nombre:</span>
                  <span className="info-value">{product.nombre}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Precio de compra:</span>
                  <span className="info-value">{product.precio_int}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Precio de venta:</span>
                  <span className="info-value">{product.precio_venta}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Dimensiones:</span>
                  <span className="info-value">{product.dimensiones}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Marca:</span>
                  <span className="info-value">{product.marca}</span>
                </div>
                {imageUrl && (
                  <img className="img-form" src={imageUrl} alt="img" />
                )}
              </section>

              <TextField
                required
                fullWidth
                label="Referencia"
                placeholder={product.referencia}
                name="ref"
                onChange={HandleChange}
                value={product.ref}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select required name="category" onChange={HandleChange}>
                  <MenuItem disabled>Categoría</MenuItem>
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
                <Select name="brand" onChange={HandleChange} required>
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
                ACTUALIZAR
              </button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      {imageFile && (
        <div>
          <p>Archivo cargado como Blob:</p>
          <a href={URL.createObjectURL(imageFile)} download="archivo.png">
            Descargar Blob
          </a>
          <img src={URL.createObjectURL(imageFile)} />
        </div>
      )}
    </Container>
  );
}

export default DashboardUpdate;
