import React from 'react';
import './css/about.css';
import pdf from "../JULIAN SCOLESCV2023.pdf";

export default function About ({resumeData, light}) {

    return (
      <section id="about">
         <div className={`about-text${light==='light' ? '' : '-dark'}`}>
              <span className='titulo-span'>Sobre mí</span>
              <p className='text-about'>{resumeData.aboutme}</p>
              <p className='text-about'>{resumeData.aboutme2}</p>
              <span className='btn-about'>
                  <a className="boton" href={pdf} target="_blank" rel="noreferrer" download="JULIAN SCOLESCV2023.pdf"> 
                  Descargar CV
                  </a>
              </span>
         </div>
      </section>
    );
}