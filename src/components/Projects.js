import React from 'react';
import './css/projects.css';
import { ConfettiComponent } from "./Confetti.js";

export default function Projects({resumeData, light}){

    return (
      <section id="portfolio">
        
        <div className="row-projects">
        
            <span className='titulo-span'> Proyectos </span>
            <div className="portfolio-wrapper">
              {
                resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
                  return(
                      <div className="item-wrap" key={index}>
                          <img src={`${item.imgurl}`} className="item-img" width='300'/>
                          <div className={`overlay${light==='light' ? '' : '-dark'}`}>
                              <h3>{item.name}</h3>
                              <p className='text-project'>{item.description}</p> 
                              <span className='button1'>
                                <a className='deploy' target="_blank" rel="noreferrer" href={item.deploy}>VER</a>
                              </span>
                          </div>
                      </div>
                  )
                })
              }
            </div>
        </div>
        <ConfettiComponent/>
      </section>
    );
}