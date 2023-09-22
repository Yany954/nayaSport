import React from "react";

function InputForm(props) {

  const handleInputChange = (e) => {
    props.setState({ ...props.state, field: e.target.value });
  };

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
      />
    </div>
  );
}

export default InputForm;
