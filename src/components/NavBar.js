import React from 'react';
import './css/navBar.css'
import {BsLinkedin, BsGithub, BsInstagram, BsMoonFill, BsSunFill} from "react-icons/bs"

export default function NavBar ({resumeData, light, setLight}) {

    const handleClick = (e)=>{
        e.preventDefault()
        if(light === 'light') {
            setLight('dark')
        } else if (light ==='dark') {
            setLight('light')
        }
      }

    return (
      <React.Fragment>
      <header id="home" className='header'>
         <nav id="nav-wrap" className='nav'>
            <ul id="nav" className="navBar">
                <li className="current"><a className={`smoothscroll${light==='light' ? '' : '-dark'}`} href="#home">Inicio</a></li>
                <li><a className={`smoothscroll${light==='light' ? '' : '-dark'}`} href="#about">Sobre mí</a></li>
                <li><a className={`smoothscroll${light==='light' ? '' : '-dark'}`} href="#resume">Tecnologías</a></li>
                <li><a className={`smoothscroll${light==='light' ? '' : '-dark'}`} href="#portfolio">Proyectos</a></li>
            </ul>
            <div className='socials-header'>
                <a className={`social${light==='light' ? '' : '-dark'}`} href='https://www.linkedin.com/in/scolesjulian1/' target='_blank' rel='noreferrer'> <BsLinkedin/> </a>
                <a className={`social${light==='light' ? '' : '-dark'}`}  href='https://github.com/scolesjulian' target='_blank' rel='noreferrer'> <BsGithub/> </a>
                <a className={`social${light==='light' ? '' : '-dark'}`}  href='https://www.instagram.com/julian_scoles/' target='_blank' rel='noreferrer'> <BsInstagram/> </a>
                {light==='light'?
                    <button className='mode' style={{'backgroundColor':'black'}} onClick={handleClick}><BsMoonFill style={{'color':'white'}}/></button>
                    :
                    <button className='mode'style={{'backgroundColor':'white'}} onClick={handleClick}><BsSunFill/></button>
                }
            </div>
         </nav>

         <div className={`row-banner${light==='light' ? '' : '-dark'}`}>
               <h2 className='hello-world'>Hola 👋, soy</h2>
               <span className="responsive-headline"> {resumeData.name}</span>
               <h2 style={{fontFamily:'sans-serif '}}>{resumeData.role}</h2>
               <br></br>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
}