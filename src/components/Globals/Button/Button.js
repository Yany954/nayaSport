import React from "react";
import { Link } from "react-router-dom";
import './Button.css';

function Button(props) {
  return <Link to={props.path}><button className="global-button">{props.text}</button></Link>;
}

export default Button;
