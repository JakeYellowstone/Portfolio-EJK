/*================== IMPORT REACT ==================*/
import React, { useRef, useState, Suspense } from 'react'

/*================== IMPORT THREE ==================*/
import { Canvas } from '@react-three/fiber'; 
import { AmbientLight, DirectionalLight } from 'three';
import { OrbitControls, SpotLight, Center} from '@react-three/drei'; 

/*================== COMPONENT IMPORT ==================*/
import StarsCanvas from '../components/canvas/Stars'
import { workExperiences } from '../constants';
import CanvasLoader from '../components/CanvasLoader'
import Cockpit from '../components/Cockpit'
import HeroCamera from '../components/HeroCamera'

/*================== MOTION IMPORT ==================*/
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";



const Accueil = () => {


  const [animationName, setAnimationName] = useState('idle')


  return (
    <section className='relative z-0 flex w-full h-screen'>
                <Canvas className='h-full'>
                    <ambientLight intensity={Math.PI/2} />
                    <directionalLight position={[10,10,5]} />
                    <Center>
                        <Suspense fallback={<CanvasLoader/>}>
                        <HeroCamera>
                            <Cockpit />
                        </HeroCamera>
                        </Suspense>
                    </Center>

                        <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} />

                </Canvas>
                              <StarsCanvas />
    </section>
  );
}



export default Accueil