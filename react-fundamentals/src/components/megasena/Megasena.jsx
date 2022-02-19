import React, { useState } from "react";
import "./megasena.css"

export default (props) => {

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min) + min); //O num aleatorio não pode estar dentro do array
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }
  console.log(gerarNumeroNaoContido(1, 5, [2, 3, 4])); //Vai passar um numero que não esteja contido no array

  function gerarNumero(qtde) {
    const numeros = Array(qtde) //Criar um array com a quantidade que foi passada e filtrar
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        console.log([...nums, novoNumero]);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2); //Se colocar n2 - n1, vai ficar na ordem decrescente

    return numeros;
  }
  console.log(gerarNumero(8)); //Vai imprimir um array com 8 posições

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumero(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
        <h2>Mega</h2>
        <h2>{numeros.join(' ')}</h2> {/*o .join() faz com que os numeros fiquem entre espaços um do outro(neste caso) */}
        <button onClick={_ => setNumeros(gerarNumero(qtde))}>
            Gerar Numeros
        </button>
        <div>
            <label>Quantidade de numeros: </label>
            <input  
                min="6"
                max="15"
                type="number" 
                value={qtde}
                onChange={(e) => {
                setQtde(+e.target.value)
                setNumeros(gerarNumero(+e.target.value))
            }} />
        </div>
    </div>
  );
};
