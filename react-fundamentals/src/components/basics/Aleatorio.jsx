import React from "react";

export default (props) => {

    // const min = props.min;
    // const max = props.max;   //Podemos declarar como Destruction veja:

    const {min, max} = props;

    const num = Math.floor(Math.random() * (max - min) + 1);
    return (
        <>
            <h2>Numeros Aleatórios de {min} a {max}:</h2>
            <p>{num}</p>
        </>
        
        
    )   
}