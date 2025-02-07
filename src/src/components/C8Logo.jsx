import React, { useRef, useState } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const C8Logo = ({...props}) => {

    const { nodes, materials } = useGLTF('/models/c.glb')
  
  const c8LogoRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(c8LogoRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });


  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 5]} rotation={[-Math.PI / 2, 0, 0]} scale={0.03} dispose={null} {...props}>
        <mesh 
            ref={c8LogoRef} 
            castShadow
            receiveShadow
            geometry={nodes['C++_C++_0'].geometry}
            material={materials.material}
            onPointerEnter={() => setHovered(true)}
        />

      </group>
    </Float>
      
  )
}

useGLTF.preload('/models/c.glb');

export default C8Logo;




/*import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Model(props) {
    cLogoRef = useRef();

  const { scene } = useGLTF('/models/c.glb')

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
    })
    })

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI/5, 0]} scale={1.5}>
        <primitive object={scene} />
    </mesh>
  )
}


useGLTF.preload('/models/c.glb')


import { useGLTF } from "@react-three/drei"
import { useRef } from "react";


const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration : 1.5,
            repeat : -1,
            yoyo : true,
        })
    })
  return (
    
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI/5, 0]} scale={1.5}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Target
*/