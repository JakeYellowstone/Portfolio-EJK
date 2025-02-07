import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const KaliLogo = (props) => {

  const { nodes, materials } = useGLTF('/models/kali.glb')
  const { scene } = useGLTF('/models/kali.glb')

  const kaliLogoRef = useRef();

  const dragontxt = useTexture('textures/dragon.png')

  useGSAP(() => {
    gsap.to(kaliLogoRef.current.position, {
        y: kaliLogoRef.current.position.y + 0.5,
        duration : 1.5,
        repeat : -1,
        yoyo : true,
    })
    })

  return (
    <group {...props} ref={kaliLogoRef} dispose={null} rotation={[0, Math.PI/5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Preto}
      >
        <meshMatcapMaterial map={dragontxt} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.Branco}
      >
        <meshMatcapMaterial map={dragontxt} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/kali.glb')

export default KaliLogo