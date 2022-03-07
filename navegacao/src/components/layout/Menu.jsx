import React from 'react';
import './Menu.css';

import { Outlet, Link } from 'react-router-dom'


const Menu = (props) => {
   return (
      <aside className='Menu'>
         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">Sobre</Link>
               </li>
               <li>
                  <Link to="/param/123">Param #01</Link>  {/*Ao colocar o ':' entende-se que vais er passado um parametro */}
               </li>
               <li>
                  <Link to="/param/legall">Param #02</Link>
               </li>
               <li>
                  <Link to="/naoexiste">Não existe</Link>
               </li>
            </ul>
         </nav>
      </aside>
   )
}

export default Menu;