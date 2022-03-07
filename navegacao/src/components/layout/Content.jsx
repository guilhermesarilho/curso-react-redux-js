import React from 'react';
import './Content.css';

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

import { Routes, Route } from 'react-router-dom'; //Importe o componente Route e Route

const Content = props => {
  return (
    <main className='Content'>
      <Routes>
          <Route path="/" exact element={<Home />} />  {/*Vai renderizar no caminho /, o componente Home */}
          <Route path="/about" element={<About />} /> {/*Vai ser renderizado no caminho /about o elemento about */}
          <Route path="/param/:id" element={<Param />} />
          <Route path="*" element={<NotFound />} />

      </Routes>
    </main>
  )
}

export default Content;