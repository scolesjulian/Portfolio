import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';
import './App.css';



export default function App() {
    const [light, setLight] = useState('light');

    return (
      <div className = {`App${light==='light' ? '-light' : '-dark'}`}>
        <NavBar resumeData={resumeData} light={light} setLight={setLight}/>
        <About resumeData={resumeData} light={light}/>
        <Skills resumeData={resumeData} light={light}/>
        <Projects resumeData={resumeData} light={light}/>
        <Contact light={light}/>
        <Footer resumeData={resumeData} light={light}/>
        
      </div>
    );
}
