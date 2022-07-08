import React from 'react';
import './Steps.css';
import {FiCircle} from 'react-icons/fi';
import {RiNumber1} from 'react-icons/ri';
import {RiNumber2} from 'react-icons/ri';
import {RiNumber3} from 'react-icons/ri';
import {RiNumber4} from 'react-icons/ri';
import {TbCoin} from 'react-icons/tb';
import {FaLaptop} from 'react-icons/fa';
import {MdOutlinePersonPin} from 'react-icons/md';
import {FaClipboardList} from 'react-icons/fa';

export default function Steps() {
  return (
    <section id = 'Steps'>
      <img src="./img/Salud.png" alt="salud" className='salud' />
      <h2 className='steps_title'>Que lo más importante sea tu salud, cuidala con nosotros</h2>

      <div className='container'>
        <div className='first_cards' >
          <FiCircle className='circle' />
          <RiNumber1 className='number_1' />
          <FaClipboardList className='list' />
          <h4 className='txt'>Responde algunas preguntas sencillas.</h4>

          <FiCircle className='circle3' />
          <RiNumber3 className='number_3' />
          <FaLaptop className='lap' />
          <h4 className='txt_3'>Inicie su solicitud en linea</h4>
        </div>

        <div className='second_cards'>
          <FiCircle className='circle2' />
          <RiNumber2 className='number_2' />
          <TbCoin className='coin' />
          <h4 className='txt_2'>Obtenga precios en un instante.</h4>

          <FiCircle className='circle4' />
          <RiNumber4 className='number_4' />
          <MdOutlinePersonPin className='person' />
          <h4 className='txt_4'>Profesionales con más de 50 años de experiencia en seguros.</h4>
        </div>
      </div>
    </section>
  )
}
