

import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './Componets/About/AboutMe'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'
import Hero from './Componets/Hero/Hero'
import Navbar from './Componets/navbar/Navbar'
import Project from './Componets/Project/Project'






function App() {

  return (
     <>
      
       <Navbar />
       <Hero />
       <AboutMe />
       <Project />
       <Contact />
       <Footer /> 
     </>
  
  )
}

export default App
