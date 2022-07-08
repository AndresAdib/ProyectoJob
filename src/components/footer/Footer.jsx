import React from 'react'
import './Footer.css';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsYoutube} from 'react-icons/bs';

export default function Footer() {
  return (
    <section id = 'Footer'>
      <img src="./img/banana.jpg" alt="banana" className='img_banana' />

      <div className='list_first'>
        <ul>
          <li><a href="#Header">Inicio</a></li>
          <li><a href="#Benefits">Nosotros</a></li>
          <li><a href="#Text">Vida</a></li>
          <li><a href="#Steps">Promociones</a></li>
        </ul>
      </div>

      <div className='list_two'>
      <ul>
          <li><a href="#Header">Foq´s</a></li>
          <li><a href="#Benefits">Blog</a></li>
          <li><a href="#Text">Aviso de Privacidad</a></li>
          <li><a href="#Steps">Contacto</a></li>
        </ul>
      </div>

      <div className='redes'>
        <h3>Redes sociales</h3>
        <RiFacebookCircleLine />
        <AiFillTwitterCircle />
        <AiOutlineInstagram />
        <BsYoutube />
      </div>
    </section>
  )
}
