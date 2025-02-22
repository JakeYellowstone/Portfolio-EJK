import React from 'react'
import { motion } from "framer-motion";
import Navbar from './sections/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'

import Footer from './sections/Footer'
import Experiences from './sections/Experiences'
import AnimationCards from './sections/AnimationCards';
import Accueil from './sections/Accueil';
import Button from './components/Button';
import FadeScrollSection from './components/FadeScrollSection';


import { Canvas } from '@react-three/fiber'; 
import { Suspense } from 'react';
import { AmbientLight, DirectionalLight } from 'three';
import CanvasLoader from './components/CanvasLoader'
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from './constants';
import PythonLogo from './components/PythonLogo';
import Ring from './components/Ring';
import C8Logo from './components/C8Logo';
import KaliLogo from './components/KaliLogo';

//bg-[#210f47]

const App = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth : 768, maxWidth : 1024 });
  
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <main className='w-full h-screen'>

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
        <Contact />  
      </FadeScrollSection>
      
      <Footer />

      <div className='fixed xs:bottom-10 bottom-15 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary border-white flex justify-center items-start p-2'>
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