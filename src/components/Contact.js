import React from 'react';
import './css/contact.css'
import {HiOutlineMail} from "react-icons/hi"
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"


export default function Contact({light}) {
    return (
      <section id="contact">
          <div className='contact-container'>
              <span className='titulo-span'> Contacto </span>
              <div className="row">
                <a href='mailto:scolesjulian1@gmail.com' target='_blank' rel='noreferrer'> <HiOutlineMail className={`mail${light==='light' ? '' : '-dark'}`}/> </a>
              </div>
              <div className='socials-header-contact'>
                <a className={`social-contact${light==='light' ? '' : '-dark'}`} href='https://www.linkedin.com/in/scolesjulian1/' target='_blank' rel='noreferrer'> <BsLinkedin/> </a>
                <a className={`social-contact${light==='light' ? '' : '-dark'}`} href='https://github.com/scolesjulian' target='_blank' rel='noreferrer'> <BsGithub/> </a>
                <a className={`social-contact${light==='light' ? '' : '-dark'}`} href='https://www.instagram.com/julian_scoles/' target='_blank' rel='noreferrer'> <BsInstagram/> </a>
              </div>
          </div>
      </section>
    );
}