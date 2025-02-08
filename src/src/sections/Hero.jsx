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
import PythonLogo from '../components/PythonLogo';
import Cube from '../components/Cube';
import Ring from '../components/Ring';
import HeroCamera from '../components/HeroCamera';
import C8Logo from '../components/C8Logo';
import KaliLogo from '../components/KaliLogo';
import Button from '../components/Button';

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth : 768, maxWidth : 1024 });
  
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
  {/* const x = useControls('PythonLogo', {
    positionX : {
      value : 2.5,
      min : -10,
      max : 30
    },
    positionY : {
      value : 2.5,
      min : -10,
      max : 10
    },
    positionZ : {
      value : 2.5,
      min : -10,
      max : 10
    },
    rotationX : {
      value : 0,
      min : -10,
      max : 10
    },
    rotationY : {
      value : 0,
      min : -10,
      max : 10
    },
    rotationZ : {
      value : 0,
      min : -10,
      max : 10
    },
    scale : {
      value : 1,
      min : 0.1,
      max : 10
    },
    }) */}

  return (
    <section className='relative min-h-screen w-full flex flex-col'>
        <div className='w-full flex flex-col mt-20 px-4 sm:px-8 gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                Bonjour, je m'appelle Esdras <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'>
                Produit de contruction & marque
            </p>
        </div>

        <div className='w-full h-full absolute inset-0'>
          {/* <Leva /> */} 
          <Canvas className="w-full h-full">

            <Suspense fallback={<CanvasLoader />} >

            <PerspectiveCamera makeDefault position={[0,0,20]} />

            <HeroCamera isMobile={isMobile}>

              <HackerRoom 
              //scale={0.07} 
              //position={[0,0,0]} 
              //rotation={[0, 280, 0]} 
              position={sizes.deskPosition}
              rotation={[0,-Math.PI,0]} 
              scale={sizes.deskScale} 
              />

            </HeroCamera>

            
            
            <group>

              <KaliLogo position={sizes.kaliPosition} />

              {/*
              <Target 
              position={sizes.targetPosition} 
              />
              */}
              


              <PythonLogo 
              position={sizes.pythonLogoPosition} 
              //position={[x.positionX, x.positionY, x.positionZ]}
              //rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              //scale={x.scale}

              />

              <C8Logo position={sizes.cubePosition} />

              <Ring position={sizes.ringPosition} />

            </group>

            <ambientLight intensity={1} />
 
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>

            </Suspense>
          </Canvas> 
        </div>

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href="#contact" className='w-fit'>
                  <Button name="Changeons le monde ensemble" isBeam containerClass="bg-black sm:w-fit w-full sm:min-w-96" />
                </a>
        </div>

    </section>
  )
}

export default Hero