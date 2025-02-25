/*================== IMPORT REACT ==================*/
import React from 'react'

/*================== IMPORT MOTION ==================*/
import { motion } from "framer-motion";
import AnimationCards from './sections/AnimationCards';
import FadeScrollSection from './components/FadeScrollSection';

/*================== IMPORT COMPOSANT ==================*/
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experiences from './sections/Experiences'

const App = () => {
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

        <Experiences />

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