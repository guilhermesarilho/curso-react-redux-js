import React, { cloneElement } from "react";

export default (props) => {
  console.log(props.children);
  console.log(props);
  return (
    <div>
        
      {props.children.map((child) => {  //Mapeia os filhos
        return cloneElement(child, props); //Clona um elemento
      })}
    </div>
  );
};

/*
1* Executa 3 elementos que vem do FamiliaMembro.jsx com sobrenomes iguais que vem do Elemento Familia no App.js*/
