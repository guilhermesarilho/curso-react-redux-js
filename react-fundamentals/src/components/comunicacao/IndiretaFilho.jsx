import React from "react";

export default (props) => {

    const cb = props.AoClicar;
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50     //Para gerar uma idade aleatória
  
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                () => {       
                    cb('Gabriel', gerarIdade(), true)
                }
            }>
              Fornecer Informações
            </button>
        </div>
    )
}