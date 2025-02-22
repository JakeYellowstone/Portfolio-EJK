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
import Tech from '../components/Tech'
import Profession from '../components/Profession'
import Moi from '../components/Moi'

/*================== MOTION IMPORT ==================*/
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";



const Experiences = () => {


  const [animationName, setAnimationName] = useState('idle')


  return (
    <section className="flex min-h-screen overflow-auto">
      <div className='w-full text-white text-white-600'>
            <div className='work-container'>
                

                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5 flex flex-col overflow-y-auto overflow-hidden h-screen'>
                    <Profession />
                    <Academic />
                    <Tech />
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
}



export default Experiences