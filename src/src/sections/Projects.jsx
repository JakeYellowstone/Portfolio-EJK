import React, { useState, Suspense} from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'; 
import { AmbientLight, DirectionalLight } from 'three';
import { Center, OrbitControls } from '@react-three/drei'; 
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';
import Monitor from '../components/Monitor';
import Phone from '../components/Phone';

const Projects = () => {
    
    const projectCount = myProjects.length;
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
          if (direction == 'previous') {
            return prevIndex == 0 ? projectCount - 1 : prevIndex - 1;
          } else {
            return prevIndex == projectCount - 1 ? 0 : prevIndex + 1;
          }
        });
      };

  return (
    <section className='flex min-h-screen'>
        <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto items-center mt-12 gap-5 w-[90%] '>
            <div className='flex flex-col gap-5 relative bg-[#210f47] sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                </div>

                <div className='flex flex-col gap-5 text-white-600 my-5'>
                    <p className='text-white text-2xl font-semibold animatedText'>
                        {currentProject.title}
                    </p>
                    <p className='animatedText text-white'>
                        {currentProject.desc}
                    </p>
                    <p className='animatedText text-white'>
                        {currentProject.subdesc}
                    </p>
                </div>
                
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-3'>
                        {currentProject.tags.map(
                            (tag, index) => (
                                <div key={index} className='tech-logo'>
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            )
                        )}
                    </div>

                    <a className='flex items-center gap-2 cursor-pointer text-white-600' href={currentProject.href} target='_blank' rel='noreferrer' >
                        <p className='text-white'>Voir Live du Projet</p>
                        <img src="/assets/arrow-up.png" className='w-3 h-3' alt="arrow" />
                    </a>
                </div>

                <div className='flex justify-between items-center mt-7'>
                    <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
                        <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4' />
                    </button>

                    <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4' />
                    </button>
                </div>
            </div>

            <div className='border col-span-2 border-blue-300 bg-black-300 rounded-lg h-96 md:h-full'>
                <Canvas>
                    <ambientLight intensity={Math.PI/2} />
                    <directionalLight position={[10,10,5]} />
                    <Center>
                        <Suspense fallback={<CanvasLoader/>}>
                        {currentProject.type === "mobile" ? (
                            <group  scale={0.045}>
                                <Phone texture={currentProject.texture} />
                            </group>
                            ) : (
                            <group position={[2, -8, 0]} scale={0.4}>
                                <Monitor texture={currentProject.texture} />
                            </group>
                        )}
                        </Suspense>
                    </Center>

                        <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} />

                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Projects