import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import './custom.css';

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
        city: "",
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
                  className="form-input formik-input2"
                  accept="application/pdf, .pdf"
                  multiple
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="+57 123 456 78 90"
                  onChange={handleChange}
                />
              </section>
              <section>
              <label htmlFor="name">País</label>
                <Field
                  className="form-input formik-input1"
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Colombia"
                  onChange={handleChange}
                />
              </section>
              <section>
              <label htmlFor="name">Ciudad</label>
                <Field
                  className="form-input formik-input1"
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Colombia"
                  onChange={handleChange}
                />
              </section>

              
            </fieldset>

            <fieldset>
              <legend>Datos del diseño</legend>
              <section>
                <label htmlFor="name">Tipo de prenda</label>
                <Field
                  className="form-input formik-input1"
                  id="typeClothing"
                  name="typeClothing"
                  type="text"
                  placeholder="Sudadera"
                  onChange={handleChange}
                />
              </section>

              <section>
                <label className="formik-input3" htmlFor="email">
                  Cantidad
                </label>
                <Field
                  id="quantity"
                  name="quantity"
                  placeholder="1"
                  type="number"
                  className="form-input"
                />
              </section>


              <section>
                <label htmlFor="lastName">Cantidad logotipos</label>
                <Field
                  className="form-input formik-input2"
                  accept="application/pdf, .pdf"
                  multiple
                  type="number"
                  id="quantityLogos"
                  name="quantityLogos"
                  placeholder="1"
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
                id="uploadDesign"
                name="uploadDesign"
                placeholder="Doe"
                onChange={handleChange}
                title="Adjuntar"
              />
            </section>
            <section>
              <label htmlFor="lastName">Sube tus logos</label>
              <Field
                className="formik-input2"
                accept="application/pdf, .pdf"
                multiple
                type="file"
                id="uploadLogos"
                name="uploadLogos"
                placeholder="Doe"
                onChange={handleChange}
                title="Adjuntar"
              />
            </section>

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
