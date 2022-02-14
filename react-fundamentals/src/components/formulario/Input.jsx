import React, {useState} from "react";
import "./input.css";

export default (props) => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        //Como faz para alterar o estado do valor?
        setValor(e.target.value)    //Agora conseguimos alterar o valor do input
        console.log(e.target.value) //Exibirá o valor digitado no console
    }

    return (
        <div  className="Input">
            <div style={{
                display: 'flex' ,
                flexDirection: 'column'
            }}>

            </div>
            <h2>{valor}</h2>
            <input type="text" value={valor} onChange={quandoMudar}/>  {/* Exemplo de um componente controlado. ou seja vinculado a um estado(useState). Evento OnChange: quando o valor mudar execute a function quandoMudar */}
            <input type="text" value={valor} readOnly /> {/*Exemplo de um componente não controlado, não é alterado o seu valor APENAS LIDO */}
            <input type="text" value={undefined} /> {/*Exibirá um input de valor vazio */}
        </div>
    )
}