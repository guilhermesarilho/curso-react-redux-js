import React, { useState } from "react"; //Com o useState nós podemos criar estados dentro do componente
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("?"); //O useState vai retorna um array de 2 posições. a 1 posição vai receber o "nome" com o valor '?', e a 2 posição vai ser a função setNome usado para alterar o nome  OBS: entre [] se chama operador Destruction
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fonecerInformações(nome, idade, nerd) {
    setNome(nome); //O setNome vai alterar o nome ...
    setIdade(idade);
    setNerd(nerd);
  }

  console.log(nome, idade, nerd);

  return (
    <div>
      <span>{nome} </span>
      <span>{idade} </span>
      <span>{nerd ? "Verdadeiro" : "Falso"} </span>
      <IndiretaFilho AoClicar={fonecerInformações} />
    </div>
  );
};
