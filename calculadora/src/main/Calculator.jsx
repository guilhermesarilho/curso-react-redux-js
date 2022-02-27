import React, { Component } from "react";
import "./Calculator.css";

import Display from "../components/Display";
import Button from "../components/Button";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState }; //Vai atribuir os valures do initialState

  /*OBS: O this tem um probleminha q faz com q precisamos usar errow functions,
   e então, podemos criar um constructor para resolver esse problema sem precisar ficar usando as errow function deixando o código mais limpo até
   ENTENDA NO MIN 13:00 da aula 47*/

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState }); //para a calc voltar ao estado inicial
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      //Se o current for igual a zero: mude o estado da operation, do current p/ 1 e do cleaDisplay
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      //Caso o current n seja mais o zero, e sim o 1:
      const equals = operation === "="; //Se o user clicar em '='
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
    } catch (e) {
        values[0] = this.state.values[0];
      }
    values[1] = 0

    this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
    })

    }
  }

  addDigit(n) {
    //Se já existe um '.' no display, não será possível add outro ponto até pq: ex: Certo: 11.00 Errado: 11.34.98 (n pode ter mais de um ponto)
    if (n === "." && this.state.displayValue.includes(".")) {
      return; //retorne nada
    }
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;

    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });

      console.log(values);
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />{" "}
        {/*Quando clicar no botão AC execute essa função. a props triple vai afazer com que pegue 3 espaço*/}
        <Button label="/" click={this.setOperation} operation />{" "}
        {/*Vai usar as config da propriedade operation */}
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}
