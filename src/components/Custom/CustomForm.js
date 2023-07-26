import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Title from "../Globals/Title/Title";
import './custom.css'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Este campo es obligatorio")
    .email("formato incorrecto"),
  name: Yup.string()
    .required("Campo obligatorio"),
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
  <div className="container-formik">

    <Formik
      //valores
      initialValues={{
        name: "",
        email: "",
        phone: "",
        country: "",
        City: "",
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
        } = props;

        return (
          <Form>

            <fieldset>
              <legend>Datos del cliente</legend>
              <section>
                <label htmlFor="name">Nombre</label>
                <Field
                  className="form-input formik-input1"
                  id="firstName"
                  name="firstName"
                  placeholder="Jane"
                  onChange={handleChange}
                />
              </section>

              <section>
                <label className="formik-input3" htmlFor="email">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                  className="form-input"
                />
              </section>


              <section>
                <label htmlFor="lastName">Celular</label>
                <Field
                  className="formik-input2"
                  accept="application/pdf, .pdf"
                  multiple
                  type="number"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  onChange={handleChange}
                />
              </section>

              
            </fieldset>

            <section>
              <label htmlFor="lastName">Sube tu diseño</label>
              <Field
                className="formik-input2"
                accept="application/pdf, .pdf"
                multiple
                type="file"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                onChange={handleChange}
              />
            </section>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="checkbox"
              className="form-input"
            />

            {
              /* ----- CAPTAR ERRORES  ----- */
              touched.email &&
              (errors.email ? (
                <div className="error">
                  <p>{errors.email}</p>
                  <ErrorMessage component={msj} name="email" />{" "}
                  {/*name es la propiedad del esquema  --- component permite personalizar el mensaje*/}
                </div>
              ) : (
                <div className="error">
                  <p>check</p>
                </div>
              ))
            }
            <button type="submit" className="formik-button">
              Enviar
            </button>
            {isSubmitting ? <p>Enviando </p> : null}
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default CustomForm;
