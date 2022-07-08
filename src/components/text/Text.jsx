import React from 'react';
import './Text.css';

export default function Text() {
  return (
    <section id = 'Text'>
      <h1 className='title_text'>Que lo más importante sea tu salud, cuidala con nosotros.</h1>

      <div className='lorem'>
        <h4>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Obcaecati cum et aut repudiandae animi ea iure libero accusamus, at minus officia nihil exercitationem. 
        Excepturi sapiente ab mollitia debitis cupiditate? Repellat!
        </h4>
      </div>

      <div className='lorem_2'>
        <h4>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Obcaecati cum et aut repudiandae animi ea iure libero accusamus, at minus officia nihil exercitationem. 
         Excepturi sapiente ab mollitia debitis cupiditate? Repellat!
        </h4>
      </div>

      <input type="submit" value='SABER MÁS'  className='buttom_class'/>
    </section>
  )
}
