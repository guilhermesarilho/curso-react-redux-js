import React from "react";
import If from "./If";

export default (props) => {
  const usuario = props.usuario || {}; //As chaves são para evitar algum erro caso nenhum usuario seja definido
  return (
    <div>
        <If test={usuario && usuario.nome}>   {/*Se o usuario for definido retorne: */}
            Seja Bem vindo <strong>{usuario.nome}</strong>
        </If>
        <If test={!usuario || !usuario.nome}>
            Seja bem vindo <strong>Amigão</strong>
        </If>
    </div>
  );
};
