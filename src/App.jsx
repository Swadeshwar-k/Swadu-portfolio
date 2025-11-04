

import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './Componets/About/AboutMe'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'
import Hero from './Componets/Hero/Hero'
import Navbar from './Componets/navbar/Navbar'
import Project from './Componets/Project/Project'

import React, { useEffect } from "react";
import ReactGA from "react-ga4";




function App() {
      useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    ReactGA.initialize("G-TXG5NTZZ39");
    ReactGA.send("pageview");
  }, []);

  return (
     <div>
       <Navbar />
       <Hero />
       <AboutMe />
       <Project />
       <Contact />
       <Footer /> 
     </div>
  
  )
}

export default App
