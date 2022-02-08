import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default (props) => {

    function Prod() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )//replace(): troca o ponto por vírgula;
        }) 
    }

    return (
        <div className="tabelaProdutos" >
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Preço</td>
                </tr>

                {Prod()}
            </table>
        </div>
    )
}

