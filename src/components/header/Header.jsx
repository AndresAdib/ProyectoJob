import React from 'react';
import './Header.css';
import Nav from './Nav.jsx';


export default function Header() {
  return (
    <section id = 'Header'>
      <Nav />
      <div className='text'>
        <h3>Tenemos un seguro de vida</h3>
        <h1>ideal para ti</h1>
        <input className='btn' type = 'button' value = "¡COTIZA AHORA!"></input>
      </div>

    </section>
  )
}
