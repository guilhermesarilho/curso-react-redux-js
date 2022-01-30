import React from 'react';
import ReactDOM from 'react-dom';
import First from './components/basics/First'
import ComParams from './components/basics/ComParams'
import './index.css';


ReactDOM.render(
  <div>
    <First />
    <ComParams titulo="apredendo React" subtitulo="Interessante"/>
  </div>,
  document.getElementById('root')
);