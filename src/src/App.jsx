import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experiences from './sections/Experiences'
import AnimationCards from './sections/AnimationCards';

const App = () => {
  return (
    <main className='w-full bg-[#717171]'>
      <AnimationCards />
      {/** 
       * 
       <Hero />
      <About />
      <Projects />
      <Clients />
      <Experiences />
      <Contact />
      <Footer />
      */}
    </main>
  )
}

export default App