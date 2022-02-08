import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Random from "./components/basics/Aleatorio";
import ComParams from "./components/basics/ComParams";
import First from "./components/basics/First";

export default function () {
  //Podemos criar essa função sem um nome, ou seja uma função anônima, OU podemos utiilizar com uma Arrow function msm
  /* <> forma reduzida do <React.Fragment> */
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="Repetição de produtos" color="#758695">
          <TabelaProdutos></TabelaProdutos>
        </Card>
        <Card titulo="Repetição" color="#99D6CE">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo="Componentes com filhos" color="#F9D362">
          <Familia sobrenome="Gomes">
            <FamiliaMembro nome="Joana" />
            {/*Pegará a prop do elemento Familia no App.jsx */}
            <FamiliaMembro nome="Helena" />
            <FamiliaMembro nome="Paulo" />
            <FamiliaMembro nome="Cleber" />
          </Familia>
        </Card>

        <Card titulo="Desafio Número Aleatório" color="#DCC48E">
          <Random min={2} max={10} /> {/*Cada elemento é um filho(children) */}
          <Random min={2} max={10} />
        </Card>

        <Card titulo="Com parâmetros" color="#EAEFD3">
          <ComParams titulo="apredendo React" subtitulo="Interessante" />
        </Card>

        <Card titulo="Primeiro Componente" color="#A4B493">
          <First />
        </Card>
      </div>
    </div>
  );
}
