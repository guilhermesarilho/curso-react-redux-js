import React from "react";
import ComParams from "./components/basics/ComParams";
import First from './components/basics/First';
import Random from './components/basics/Aleatorio';


export default function(){     //Podemos criar essa função sem um nome, ou seja uma função anônima, OU podemos utiilizar com uma Arrow function msm
    return (
        <>   {/*forma reduzida do <React.Fragment> */}
            <h1>Fundamentos React</h1>
            <Random 
                min={2}
                max={10}
            />
            <ComParams 
                titulo="apredendo React"
                subtitulo="Interessante"
             />
            <First />
        </>
    )
}