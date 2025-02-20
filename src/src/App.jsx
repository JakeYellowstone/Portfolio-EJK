import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import StarsCanvas from './components/canvas/Stars'
import Footer from './sections/Footer'
import Experiences from './sections/Experiences'
import AnimationCards from './sections/AnimationCards';
import Button from './components/Button';

const App = () => {
  return (
    <main className='w-full bg-[#210f47]'>

      <Accueil />
      
      {/** 
       * 
       <AnimationCards />  
       <Experiences />
       <Projects />
       <div className='relative z-0'>
       <Contact />  
       <StarsCanvas />
       </div>
       <Hero />
      <Clients />
      <Contact />
      <Footer />
        <Contact />
      */}

    </main>
  )
}

export default App