/*================== IMPORT REACT ==================*/
import React, { useRef, useState, Suspense } from 'react'

/*================== IMPORT THREE ==================*/
import { Canvas } from '@react-three/fiber'; 
import { AmbientLight, DirectionalLight } from 'three';
import { OrbitControls, SpotLight} from '@react-three/drei'; 

/*================== COMPONENT IMPORT ==================*/
import { workExperiences } from '../constants';
import CanvasLoader from '../components/CanvasLoader'
import Cockpit from '../components/Cockpit'
import Tech from '../components/Tech'
import Profession from '../components/Profession'
import Moi from '../components/Moi'

/*================== MOTION IMPORT ==================*/
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";



const Accueil = () => {


  const [animationName, setAnimationName] = useState('idle')


  return (
    <section className="flex min-h-screen">
      <Cockpit />
    </section>
  );
}



export default Accueil