import React, { Component } from "react";
import "./Contador.css"

//Criando uma classe:
export default class Contador extends Component {
  //Crie uma classe extendida com o Component

  state = {
    //Usando o useState em classes
    numero: this.props.numeroInicial || 0, //Iniciar com o valor inicial da props numeroIncial Ouu 0
    passo: this.props.passoInicial || 10,
  };
  //funcao para incrementar mais um numero ao contador
  inc = () => {
    //Para que o this execute, vc deve fazer
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };
  //Outra forma de fazer com q o this execute a função
  //   constructor(props){
  //       super(props);

  //       this.inc = this.inc.bind(this)
  //   }

  setPasso = (e) => {
      this.setState({
          passo: +e.target.value
      })
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <label htmlFor="passoInput">Passo:</label>

        <input
          id="passoInput"
          type="number"
          value={this.state.passo}
          onChange={this.setPasso}
        />
    <br />
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>

        <p>Valor: {this.state.numero}</p>
        {/* <p>Valor: {this.props.numeroInicial}</p> A propriedade que representa a instância dessa classe */}
      </div>
    );
    console.log("valor", this.state.numero);
  }
}
