import React from "react";
import ComParams from "./components/basics/ComParams";
import First from "./components/basics/First";
import Random from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";

export default function () {
  //Podemos criar essa função sem um nome, ou seja uma função anônima, OU podemos utiilizar com uma Arrow function msm
  /* <> forma reduzida do <React.Fragment> */
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="Desafio Número Aleatório" color='#DCC48E' >
          <Random min={2} max={10} /> {/*Cada elemento é um filho(children) */}
          <Random min={2} max={10} />
        </Card>

        <Card titulo="Com parâmetros" color='#EAEFD3'>
          <ComParams titulo="apredendo React" subtitulo="Interessante" />
        </Card>

        <Card titulo="Primeiro Componente" color="#A4B493">
          <First />
        </Card>
      </div>
    </div>
  );
}
