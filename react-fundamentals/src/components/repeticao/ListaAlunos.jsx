import React from 'react';
import alunos from '../../data/alunos';

export default (props) => {
    console.log(alunos) //um array dos alunos

    const lis = alunos.map((aluno) => { //Vai pecorrer os arrays de 'alunos' e retorna cada valor
        return (
            <li key={aluno.id}> 
                {aluno.id}) {aluno.nome}: {aluno.nota}
            </li>
        )
//Importancia de usar a chave: Com a chave(key) o React será capaz de detectar as mudanças que podem acontecer com mais facilidade e rápidez
    })
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {lis}
            </ul>
        </div>
    )
}

