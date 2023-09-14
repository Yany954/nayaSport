import React from "react";

function InputForm(props) {

  const handleInputChange = (e) => {
    props.setState({ ...props.state, field: e.target.value });
  };

 /* function validate(e) {
    if (props.regex) {
      if (props.regex.test(props.state.campo)) {
        props.setState({ ...props.state, valido: "true" });
      } else {
        props.setState({ ...props.state, valido: "false" });
      }
    }
  }*/

  return (
    <div>
      <label htmlFor={props.name}>
        {props.label}
      </label>

      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.state.field}
        onChange={handleInputChange}
       /* onKeyUp={validate}
        onBlur={validate}
        validate={props.state.valido}*/
      />
    </div>
  );
}

export default InputForm;
