import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'; 
import { workExperiences } from '../constants';
import { Suspense } from 'react';
import { AmbientLight, DirectionalLight } from 'three';
import { OrbitControls, SpotLight} from '@react-three/drei'; 
import CanvasLoader from '../components/CanvasLoader'
import Academic from '../components/Academic'
import Moi from '../components/Moi'
import { div } from 'three/tsl';


const Experiences = () => {

//https://models.readyplayer.me/67abea1cd24575c41c828341.glb

    const [animationName, setAnimationName] = useState('idle')


  return (
    <section className='flex min-h-screen'>
        <div className='w-full text-white text-white-600'>

            <div className='work-container'>
                <div className='work-canvas'>
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
                

                <div className='work-content'>
                    <div className='sm:py-10 py-5 h-screen overflow-auto sm:px-5 px-2.5'>
                        <Academic />
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Experiences