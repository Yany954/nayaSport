import React, { useRef } from "react";
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import Title from "../../Globals/Title/Title";

function AdminAddForm() {
  const imageInputRef = useRef(null);

  const handleAddImageClick = () => {
    // Activa el input de imagen cuando se hace clic en "Agregar imagen"
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      // Muestra el nombre del archivo seleccionado
      // Puedes personalizar cómo mostrarlo (por ejemplo, en un div o un span)
      console.log("Archivo seleccionado:", selectedFile.name);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <Title title="Añadir producto" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Referencia"
              placeholder="Referencia"
              name="ref"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select
                required
                name="category"
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
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Precio de adquisición"
              placeholder="Precio de adquisición"
              name="priceBuy"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Precio de venta"
              placeholder="Precio de venta"
              name="priceSale"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Marca</InputLabel>
              <Select
                name="brand"
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
            <Button variant="contained" color="primary">
              GUARDAR
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default AdminAddForm;
