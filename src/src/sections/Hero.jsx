import React from 'react'
import { Canvas } from '@react-three/fiber'; 
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei'; 
import { AmbientLight, DirectionalLight } from 'three';
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import {Leva, useControls} from "leva"
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth : 768, maxWidth : 1024 });
  
  const sizes = calculateSizes(isSmall, isMobile, isTablet);



  return (
    <section className='relative min-h-screen w-full flex flex-col'>
        <div className='w-full max-auto flex flex-col mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                Bonjour, je m'appelle Esdras <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'>
                Produit de contruction & marque
            </p>
        </div>

        <div className='w-full h-full absolute inset-0'>
          {/**<Leva /> */}
          <Canvas className="w-full h-full">

            <Suspense fallback={<CanvasLoader />} >

            <PerspectiveCamera makeDefault position={[0,0,20]} />
              
            <HackerRoom 
            //scale={0.07} 
            //position={[0,0,0]} 
            //rotation={[0, 280, 0]} 
            position={sizes.deskPosition}
            rotation={[0,-Math.PI,0]} 
            scale={sizes.deskScale} 
            />
            
            <group>
              <Target />
            </group>

            <ambientLight intensity={1} />
 
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>

            </Suspense>
          </Canvas> 
        </div>

    </section>
  )
}

export default Hero