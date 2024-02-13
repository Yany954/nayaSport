import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import FileUploadField from "./FileUploadField";
import UploadLogosField from "./UploadLogosField";
import UploadMoreField from "./UploadMoreField";
import Alert from "@mui/material/Alert";
import Title from "../Globals/Title/Title";
import * as Yup from "yup";
import "./custom.css";

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 10 MB (cambia el valor según tus requerimientos)

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Este campo es obligatorio")
    .email("Formato incorrecto"),
  name: Yup.string().required("Campo obligatorio"),
  /* uploadDesign: Yup.array()
    .of(
      Yup.object().shape({
        file: Yup.mixed().required("Debe adjuntar al menos un archivo"),
        name: Yup.string().required("Debe adjuntar al menos un archivo"),
        type: Yup.string(),
        size: Yup.number(),
      })
    )
    .min(1, "Debe adjuntar al menos un archivo")
    .required("Debe adjuntar al menos un archivo"),
 */
  quantity: Yup.number().min(0, "La cantidad debe ser al menos cero"),
  quantityLogos: Yup.number().min(0, "La cantidad debe ser al menos cero"),
});

const CustomForm = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const handleSubmit = async (values) => {
    try {
      setIsSubmittingForm(true);
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (Array.isArray(values[key])) {
          // Si es un array, se agrega cada elemento al objeto FormData
          values[key].forEach((file) => {
            formData.append(key, file);
          });
        } else {
          // Si no es un array, se agrega directamente al objeto FormData
          formData.append(key, values[key]);
        }
      });

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      const response = await fetch(
        "https://formsubmit.co/354adf7ac3f23e98449f4f9c828f01f9",
        requestOptions
      );

      if (response.status === 200) {
        setSuccessAlert(true);
        Swal.fire({
          icon: "success",
          title: "¡Formulario enviado!",
          text: "Tu formulario ha sido enviado con éxito.",
          showConfirmButton: false, // Sin botón de confirmación
          timer: 3000, // La alerta se cerrará automáticamente después de 3 segundos
        });
      } else {
        // Si hay un error en la solicitud, muestra un mensaje de error
        alert("Hubo un error al enviar el formulario");
        console.error(response.status);
        console.error(response);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmittingForm(false); // Establecer isSubmittingForm a false después de finalizar el envío
    }
  };

  return (
    <div className="container-customform">
      <Title
        color="white"
        title="¿Quieres saber cómo podemos hacer tus diseños realidad?"
      />

      <h3 className="custom-form-subtitle">
        ¡Envíanos tu información y te haremos una cotización personalizada!
      </h3>
      <div className="container-formik">
        <Formik
          //valores
          initialValues={{
            name: "",
            email: "",
            phone: "",
            typeClothing: "",
            quantity: "",
            quantityLogos: "",
            uploadDesign: [],
            uploadMore: [],
            uploadLogos: [],
            terms: "",
          }}
          //YUP -> validar el esquema
          validationSchema={formSchema}
          //Evento para enviar
          onSubmit={async (values) => {
            handleSubmit(values); // Llama a la función de manejo de envío de formulario
            localStorage.setItem("credential", JSON.stringify(values));
          }}
        >
          {/*obtener props con formik */}
          {(props) => {
            const {
              values, //valores
              touched, // si el usuario manipulo el form
              errors, //verificar si hay errores
              isSubmitting, //si se esta enviando
              handleChange, //si hay cambios en un campo
              handleBlur, //si hay cambio de foco en el input
              isValid, // saber si es valido
              isValidating, //si esta corriendo una validacion
              setFieldValue,
            } = props;
            const clothingOptions = [
              "Seleccione...",
              "Camiseta",
              "Polo",
              "Delantal",
              "Pantalón",
              "Jogger",
              "Chaqueta",
              "Sudadera",
              "Uniforme de fútbol",
              "Uniforme de baloncesto",
              "Uniforme de ciclismo",
              "Uniforme de tenis",
              "Petos",
              "Dotación",
              "Otro",
            ];
            return (
              <Form encType="multipart/form-data">
                <section className="form-section">
                  <section className="form-column">
                    <div className="form-items">
                      <label htmlFor="name">Nombre</label>
                      <Field
                        className="form-input formik-input1"
                        id="name"
                        name="name"
                        placeholder="Juana"
                        onChange={handleChange}
                      />
                      {touched.name && errors.name && (
                        <Alert severity="error" style={{ marginTop: "5px" }}>
                          {errors.name}
                        </Alert>
                      )}
                    </div>

                    <div className="form-items">
                      <label htmlFor="email">Correo electrónico</label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="juana@gmail.com"
                        type="email"
                        className="form-input"
                        onChange={handleChange}
                      />
                      {touched.email && errors.email && (
                        <Alert severity="error" style={{ marginTop: "5px" }}>
                          {errors.email}
                        </Alert>
                      )}
                    </div>

                    <div className="form-items">
                      <label htmlFor="typeClothing">Tipo de prendas</label>

                      <Field
                        id="typeClothing"
                        name="typeClothing"
                        as="select"
                        className="form-select"
                        onChange={handleChange}
                      >
                        {clothingOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="form-items">
                      <label htmlFor="quantity">Cantidad de prendas</label>
                      <Field
                        type="number"
                        id="quantity"
                        name="quantity"
                        className="form-input"
                        placeholder="0"
                        onChange={handleChange}
                      />
                      {touched.quantity && errors.quantity && (
                        <Alert severity="error" style={{ marginTop: "5px" }}>
                          {errors.quantity}
                        </Alert>
                      )}
                    </div>

                    <label htmlFor="quantityLogos">Cantidad de logotipos</label>
                    <Field
                      type="number"
                      id="quantityLogos"
                      name="quantityLogos"
                      className="form-input"
                      placeholder="0"
                      onChange={handleChange}
                    />
                    <div>
                      {touched.quantityLogos && errors.quantityLogos && (
                        <Alert severity="error" style={{ marginTop: "5px" }}>
                          {errors.quantityLogos}
                        </Alert>
                      )}
                    </div>
                  </section>

                  <section className="form-column">
                    <br></br>
                    <br></br>
                    <FileUploadField
                      id="uploadDesign"
                      name="uploadDesign"
                      accept="application/pdf, .pdf, .jpg, .jpeg, .png"
                      multiple
                      label="Sube tu diseño (PDF, imagen)"
                    />
                    <br></br>
                    {touched.uploadDesign && errors.uploadDesign && (
                      <Alert severity="error">{errors.uploadDesign}</Alert>
                    )}

                    <h4 className="custorm-form-info">
                      Los diseños son tomados en cuenta para la realizacion de
                      la cotización.
                    </h4>

                    <UploadLogosField
                      id="uploadLogos"
                      name="uploadLogos"
                      accept="application/pdf, .pdf, .jpg, .jpeg, .png"
                      multiple
                      label="Sube tus logos (PDF, imagen)"
                    />
                    <ErrorMessage
                      name="uploadLogos"
                      component="div"
                      className="error"
                    />
                    <h4 className="custorm-form-more-info">
                      ¿Deseas proporcionar mas información?
                    </h4>
                    <UploadMoreField
                      id="uploadMore"
                      name="uploadMore"
                      accept="application/pdf, .pdf, .jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx"
                      multiple
                      label="Sube tus archivos (PDF, imagen, excel)"
                    />
                    <ErrorMessage
                      name="uploadMore"
                      component="div"
                      className="error"
                    />
                  </section>
                </section>

                <section className="container-form-terms">
                  <label htmlFor="terms"></label>
                  <Field id="terms" name="terms" type="checkbox" />
                  <a
                    className="form-terms"
                    href="/terminos-y-condiciones"
                    target="_blank"
                  >
                    Acepto términos y condiciones
                  </a>
                </section>

                <div className="container-button">
                  <button
                    type="submit"
                    className="formik-button"
                    disabled={isSubmitting || isSubmittingForm}
                  >
                    {isSubmittingForm ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CustomForm;
