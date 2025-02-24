import React, { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Phone =  (props) => {
  const { nodes, materials } = useGLTF('/models/phone.glb')
  const group = useRef()
  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4')

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y :  Math.PI / 2,
      duration : 1,
      ease : 'power3.out',
    })
  }, [txt])

  return (
    <group {...props} ref={group} dispose={null}>
      <group position={[0.1, 2.397, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Color_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Black}
        />
      </group>
      <group position={[0.1, 2.397, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Color_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Color_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Black_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Black_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Camera_Lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Glass}
        />
      </group>
      <mesh
        name='ecran_phone'
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Lock_Screen}
        position={[0.1, 2.397, -0.027]}>
          <meshBasicMaterial map={txt} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Glass}
        position={[0.1, 2.397, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Black_2}
        position={[0.106, 2.397, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Black_2}
        position={[0.094, 2.397, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/phone.glb')

export default Phone;
