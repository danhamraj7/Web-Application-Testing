import React from "react";

const Button = props => {
  return <button onClick={props.btnClicked}>{props.type}</button>;
};

export default Button;
