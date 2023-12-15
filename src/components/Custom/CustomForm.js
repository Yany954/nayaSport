import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Title from "../Globals/Title/Title";
import FileUploadField from "./FileUploadField";
import UploadLogosField from "./UploadLogosField";
import UploadMoreField from "./UploadMoreField";
import "./custom.css";

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Este campo es obligatorio")
    .email("formato incorrecto"),
  name: Yup.string().required("Campo obligatorio"),
  uploadDesign: Yup.mixed().required("Debes subir un archivo"),
});

function msj() {
  return (
    <div>
      <div className="mensaje">mal mal malll</div>
      <div className="mensaje2">malisimooo</div>
    </div>
  );
}
const handleSubmit = async (values) => {
  try {
    const formData = new FormData(); // Crea un objeto FormData


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
      headers: {
        // Especifica el tipo de contenido como 'multipart/form-data'
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await fetch(
      "https://formsubmit.co/354adf7ac3f23e98449f4f9c828f01f9",
      requestOptions
    );

    if (response.status===200) {
      // Si la solicitud es exitosa (código de estado HTTP 200-299), muestra un mensaje de éxito
      alert("Formulario enviado correctamente");
    } else {
      // Si hay un error en la solicitud, muestra un mensaje de error
      alert("Hubo un error al enviar el formulario");
      console.error(response.status);
      console.error(response);
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
  }
};

const CustomForm = () => (
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
          await new Promise((res) => setTimeout(res, 500));
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
            <Form>
              <section className="form-section">
                <section className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <Field
                    className="form-input formik-input1"
                    id="name"
                    name="name"
                    placeholder="Juana"
                    onChange={handleChange}
                  />
                </section>

                <section className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="juana@gmail.com"
                    type="email"
                    className="form-input"
                  />
                </section>

                <section className="form-group">
                  <label htmlFor="typeClothing">Tipo de prendas</label>
                  <div>
                    <Field
                      id="typeClothing"
                      name="typeClothing"
                      as="select"
                      className="form-select"
                    >
                      {clothingOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>
                </section>

                <section className="form-group">
                  <label htmlFor="quantity">Cantidad de prendas</label>
                  <Field
                    type="number"
                    id="quantity"
                    name="quantity"
                    className="form-input"
                    placeholder="0"
                  />
                </section>
              </section>
              <section className="form-section">
                <section className="form-group2">
                  <label htmlFor="quantityLogos">Cantidad de logotipos</label>
                  <Field
                    type="number"
                    id="quantityLogos"
                    name="quantityLogos"
                    className="form-input"
                    placeholder="0"
                  />
                </section>

                <section className="form-group2">
                  <FileUploadField
                    id="uploadDesign"
                    name="uploadDesign"
                    accept="application/pdf, .pdf, .jpg, .jpeg, .png"
                    multiple
                    label="Sube tu diseño (PDF, imagen)"
                  />
                  <ErrorMessage
                    name="uploadDesign"
                    component="div"
                    className="error"
                  />

                  <h4 className="custorm-form-info">
                    Los diseños son tomados en cuenta para la realizacion de la
                    cotización.
                  </h4>
                </section>

                <section className="form-group2">
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
                </section>
                <section className="form-group2">
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

              {touched.email &&
                (errors.email ? (
                  <div className="error">
                    <p>{errors.email}</p>
                    <ErrorMessage component={msj} name="email" />
                  </div>
                ) : (
                  <div className="error">
                    <p>check</p>
                  </div>
                ))}
              <div className="container-button">
              <button type="submit" className="formik-button" disabled={isSubmitting}>
    {isSubmitting ? 'Enviando...' : 'Enviar'}
  </button>
              </div>

              
            </Form>
          );
        }}
      </Formik>
    </div>
  </div>
);

export default CustomForm;
