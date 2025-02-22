import React from 'react'
import { motion } from "framer-motion";
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
import Accueil from './sections/Accueil';
import Button from './components/Button';
import FadeScrollSection from './components/FadeScrollSection';

//bg-[#210f47]

const App = () => {
  return (
    <main className='w-full'>

      <FadeScrollSection>

      <AnimationCards />  
      </FadeScrollSection>

      <FadeScrollSection>

      <About />  
      </FadeScrollSection>


      <FadeScrollSection>
      <Projects />

      </FadeScrollSection>

      <FadeScrollSection>

      <Experiences />
      </FadeScrollSection>

      <FadeScrollSection>
      <div className='relative z-0'>
      <Contact />  
      <StarsCanvas />
      </div>

      </FadeScrollSection>
      
      {/** 
       
       
       <Accueil />
       <Footer />
      */}

<div className='fixed xs:bottom-10 bottom-15 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#915EFF] mb-1'
            />
          </div>
        </a>
      </div>
    </main>
  )
}

export default App