import React from "react";


export default (props) => {
    const isPar = props.numero % 2 === 0;
    return (
        <div>

           <p>O numero {props.numero} é {isPar ?  <span>par</span> : <span>ímpar</span>} </p> 
        </div>
    )
}