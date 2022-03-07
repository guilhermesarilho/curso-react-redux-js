import React from 'react';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom"; //Para utilizar as rotas, importe o react-router-dom

import Menu from "../components/layout/Menu"
import Content from "../components/layout/Content"

const App = (props) => {

  return (
    <div className='App'>
      <Router>  {/*O router deve envolver os elementos que vão usar rotas */}
        <Menu />
        <Content />
      </Router>
    </div>
  )
}

export default App;
