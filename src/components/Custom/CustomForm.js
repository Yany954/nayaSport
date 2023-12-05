import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Title from "../Globals/Title/Title";
import "./custom.css";

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Este campo es obligatorio")
    .email("formato incorrecto"),
  name: Yup.string().required("Campo obligatorio"),
});

function msj() {
  return (
    <div>
      <div className="mensaje">mal mal malll</div>
      <div className="mensaje2">malisimooo</div>
    </div>
  );
}

const CustomForm = () => (
  <div className="container-customform">
    <Title
      color="white"
      title="¿Quieres saber cómo podemos hacer tus diseños realidad?"
    />

    <h3 className="custom-form-subtitle">¡Envíanos tu información y te haremos una cotización personalizada!</h3>
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
          uploadDesign: "",
          uploadLogos: "",
          terms: "",
        }}
        //YUP -> validar el esquema
        validationSchema={formSchema}
        //Evento para enviar
        onSubmit={async (values) => {
          await new Promise((res) => setTimeout(res, 500));
          alert(JSON.stringify(values, null, 2));

          //guardar las credenciales en el local storage
          localStorage.setItem("credential", values);
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
          const handleIncrement = (fieldName) => {
            setFieldValue(fieldName, values[fieldName] + 1);
          };

          const handleDecrement = (fieldName) => {
            if (values[fieldName] > 0) {
              setFieldValue(fieldName, values[fieldName] - 1);
            }
          };

          const handleFileChange = (event, fieldName) => {
            setFieldValue(fieldName, event.currentTarget.files);
          };

          return (
            <Form>
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
                <label htmlFor="email">Correo electronico</label>
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

              <section className="form-group">
                <label htmlFor="quantityLogos">Cantidad de logotipos</label>
                <Field
                  type="number"
                  id="quantityLogos"
                  name="quantityLogos"
                  className="form-input"
                  placeholder="0"
                />
              </section>

              <section className="form-group">
                <label htmlFor="uploadDesign">
                  Sube tu diseño (PDF, imagen)
                </label>
                <Field
                  className="formik-input2"
                  accept="application/pdf, .pdf, .jpg, .jpeg, .png"
                  multiple
                  type="file"
                  id="uploadDesign"
                  name="uploadDesign"
                  placeholder="Sube tu diseño"
                  onChange={(event) => handleFileChange(event, "uploadDesign")}
                />
                <h4 className="custorm-form-info">
              Los diseños son tomados en cuenta para la realizacion de la cotización.</h4>
              </section>
              

              <section className="form-group">
                <label htmlFor="uploadLogos">
                  Sube los logotipos (PDF, imagen)
                </label>
                <Field
                  className="formik-input2"
                  accept="application/pdf, .pdf, .jpg, .jpeg, .png"
                  multiple
                  type="file"
                  id="uploadLogos"
                  name="uploadLogos"
                  placeholder="Sube los logotipos"
                  onChange={(event) => handleFileChange(event, "uploadLogos")}
                />
              </section>

              <section className="container-form-terms">
                <label htmlFor="terms"></label>
                  <Field
                    id="terms"
                    name="terms"
                    type="checkbox"
                  />
                  <a className="form-terms" href="/terminos-y-condiciones" target="_blank">
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

              <button type="submit" className="formik-button">
                Enviar
              </button>

              {isSubmitting ? <p>Enviando</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  </div>
);

export default CustomForm;
