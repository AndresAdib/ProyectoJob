import React from 'react';
import './Nav.css';

export default function Nav() {

  return (
    <div className='menu'>
      <img src="./img/banana.jpg" alt="banana" />
      <nav>
       <ul>
          <li><a href='#Header' >Inicio</a></li>
          <li><a href="#Benefits" >Nosotros</a></li>
          <li><a href="#Text" >Vida</a></li>
          <li><a href="#Steps" >Promociones</a></li>
          <li><a href="#Steps" >Foq´s</a></li>
          <li><a href="#Text" >Blog</a></li>
          <li><a href="#Footer" >Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
}
