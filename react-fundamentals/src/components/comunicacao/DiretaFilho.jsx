import React from "react";

export default (props) => {
  return (
    <div>
      <span>{props.nome} - </span>
      <span>idade: {props.idade} - </span>
      <span>É Nerd? <strong>{props.nerd ? "Verdadeiro" : "Falso"}</strong></span>
    </div>
  );
};
