import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n  //função recursiva
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1)

    const [status, setStatus] = useState("Ímpar");

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number]); //Quando o estado "number" for modificado, essa função deve ser chamada

    useEffect(() => {
        if (fatorial > 1000000) {
            document.title = "Eita poha"
        }
    }, [fatorial])  //Se o estado "fatorial" for maior que 1000000 imprima eita poha

    useEffect(() => {
        setStatus(number % 2 === 0 ? "Par" : "Impar");
    }, [number])

        return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className='text'>Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                <input type="number" className="input" value={number} onChange={(e) => { setNumber(e.target.value) }} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">Status:</span>
                <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
