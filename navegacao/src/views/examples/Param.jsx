import React from 'react';
import { useParams } from 'react-router-dom'; //O useParams vai retorna o nosso id

const Param = (props) => {
    const { id } = useParams()
  return (
    <div className='Param'> 
      <h1>Componente Param</h1>
      <p>Valor: {id}</p>    {/*O valor que está no parametro da URL será colocado aqui */}
    </div>
  )
}

export default Param;