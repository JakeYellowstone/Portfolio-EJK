/*================== IMPORT REACT ==================*/
import React, { useRef, useState, Suspense } from 'react'

/*================== IMPORT THREE ==================*/
import { Canvas } from '@react-three/fiber'; 
import { AmbientLight, DirectionalLight } from 'three';
import { OrbitControls, SpotLight} from '@react-three/drei'; 

/*================== COMPONENT IMPORT ==================*/
import { workExperiences } from '../constants';
import CanvasLoader from '../components/CanvasLoader'
import Academic from '../components/Academic'
import Moi from '../components/Moi'

/*================== MOTION IMPORT ==================*/
import { motion } from "framer-motion";



const Experiences = () => {


  const [animationName, setAnimationName] = useState('idle')


  return (
    <section className="flex min-h-screen">
      {/* Partie gauche (autre contenu) */}
      <div className="w-1/4 justify-center flex">
      <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<CanvasLoader />}>
                            <Moi position-y={-3} scale={3}  animationName={animationName} />
                        </Suspense>
                    </Canvas>
      </div>

      {/* Partie droite avec l'animation */}
      <div className="w-3/4 flex flex-col overflow-y-auto overflow-hidden h-screen">
        <Academic />
        

      <div className='absolute xs:bottom-10 bottom-15 w-full flex justify-center items-center'>
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
      </div>
    </section>
  );
}



export default Experiences