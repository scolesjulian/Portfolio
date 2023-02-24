import React from 'react';
import './css/skills.css';

export default function Skills({resumeData, light}) {
    return (
        <section id="resume">

            <div className="row-skill">
                 <span className='titulo-span'>Tecnologías</span>

                <div className="numerated-skills">
                        {
                        resumeData.skills && resumeData.skills.map((item, index) => {
                            return(
                                <div className={`skill${light==='light' ? '' : '-dark'}`} key={index}>
                                    <img src={item.img} width='90'/>
                                    <span>{item.skillname}</span>
                                </div>
                            )
                        })
                        }
                </div>
            </div>

        </section>
    );
}