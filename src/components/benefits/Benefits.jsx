import React from 'react';
import './Benefits.css';
import {GiReceiveMoney} from 'react-icons/gi';
import {BsShieldLock} from 'react-icons/bs';
import {MdComputer} from 'react-icons/md';
import {FaRegIdCard} from 'react-icons/fa';

export default function Benefits() {
  return (
    <section id = 'Benefits'>
      <div className='cards'>
        <h2 className='title'>Beneficios de usar Plan life</h2>
        <h4 className='subtitle'>Costo</h4>
        <GiReceiveMoney className='icon'/>
        <h5 className='read'>Nuestra tecnología nos permite reducir costos y ofrecer tarifas competitivas.</h5>

        <h4 className='subtitle'>Seguridad</h4>
        <BsShieldLock className='icon'/>
        <h5 className='read'>Estamos certificados para proteger todas tus transacciones. Asistecia a usuarios, Asitencia personalizada, soporte</h5>

        <h4 className='subtitle'>Atencion 24/7</h4>
        <MdComputer className='icon' />
        <h5 className='read'>Somos una empresa mexicana. Entendemos mejor que nadie tus necesidades.</h5>

        <h4 className='subtitle'>Regístro rápido y sencillo</h4>
        <FaRegIdCard className='icon' />
        <h5 className='read'>Registrate y empieza a transaccionar en menos de 30 minutos.</h5>
      </div>

      <div className='comuni'>
        <img src="./img/comunicación.png" alt="comu" className='image' />
      </div>
    </section>
  )
}
