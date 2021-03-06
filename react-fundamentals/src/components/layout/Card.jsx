import React from "react";
import "./Card.css";

export default (props) => {
 
    const cardStyle = {
        backgroundColor: props.color || '#008',
        borderColor: props.color || '#F00'
    }

 
    return (
    <div className="card" style={cardStyle}>
      {/*No React para chamar uma classe utilizamos o atributo ClassName ao invés de class */}
      <div className="title">{props.titulo}</div>
      <div className="content">
          {props.children}    {/*Será exibido os filhos do componente <Card> */}
      </div>
    </div>
  );
};
