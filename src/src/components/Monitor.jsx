import React, { useEffect, useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Monitor =  (props) => {
  const { nodes, materials } = useGLTF('./models/monitor_2.glb')
  const group = useRef()
  const txt = useVideoTexture(props.texture ? props.texture : './textures/project/project1.mp4')
  

  
  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y :  Math.PI / 2,
      duration : 1,
      ease : 'power3.out',
    })
  }, [txt])


  return (
    <group {...props} ref={group} dispose={null}>
      <group position={[-4.455, 21.449, -4.052]} rotation={[0, -0.045, 0]} scale={[16, 9, 0.369]}>
        <mesh
            name='bord_ecran'
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.plastic}
        />
        <group position={[0, -1.777, -1.87]} scale={[0.359, 0.053, 10.825]}>
          <mesh
            name='le_pied'
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.plastic}
            position={[0.005, 25.317, -0.16]}
            scale={[0.174, 1.417, 0.25]}
          />
          <mesh
            name='jambe'
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.plastic}
            position={[0, 13.446, -0.424]}
            scale={[0.188, 13.965, 0.27]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['Material.001']}
          position={[-0.432, -0.417, -0.861]}
          rotation={[0, 0.131, 0]}
          scale={[0.314, 0.07, 0.262]}
        />
        <mesh
            name='ecran'
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.display}
          position={[0, 0, 0.029]}
          scale={[0.986, 0.954, 0.993]}
        >
            <meshBasicMaterial map={txt} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/monitor_2.glb')

export default Monitor;
