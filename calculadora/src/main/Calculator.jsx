import React, { Component } from "react";
import "./Calculator.css";

import Display from "../components/Display";
import Button from "../components/Button";
export default class Calculator extends Component {

   /*OBS: O this tem um probleminha q faz com q precisamos usar errow functions,
   e então, podemos criar um constructor para resolver esse problema sem precisar ficar usando as errow function deixando o código mais limpo até
   ENTENDA NO MIN 13:00 da aula 47*/
   
    constructor(props){
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }


    clearMemory(){
        console.log("limpar")
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }

    render(){

        return (
            <div className="calculator">
                <Display value={10000} />
                <Button label="AC" click={this.clearMemory} triple/>  {/*Quando clicar no botão AC execute essa função. a props triple vai afazer com que pegue 3 espaço*/}
                <Button label="/" click={this.setOperation} operation/>  {/*Vai usar as config da propriedade operation */}
                <Button label="7"  click={this.addDigit} />
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}