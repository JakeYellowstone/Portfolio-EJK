import React, { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Phone =  (props) => {
  const { nodes, materials } = useGLTF('/models/smartphone.glb')
  const group = useRef()
  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4')
  txt.repeat.set(1.2, 1); // Ajuste la répétition sur l'axe X
txt.offset.set(-0.1, 0); // Décale légèrement la texture


  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y :  Math.PI / 2,
      duration : 1,
      ease : 'power3.out',
    })
  }, [txt])

  return (
    <group {...props} ref={group}  dispose={null}>
      <group position={[0, 53.738, -4.172]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera_Camera_0.geometry}
          material={materials.Camera}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glass_Glass_0.geometry}
          material={materials.Glass}
          position={[0, -0.246, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Flashlight_Flashlight_0.geometry}
        material={materials.Flashlight}
        position={[-12.103, 53.876, -4.172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fingerprint_Fingerprint_0.geometry}
        material={materials.Fingerprint}
        position={[13.503, 53.876, -4.172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3_5_Jack_Jack_0'].geometry}
        material={materials.Jack}
        position={[-17.515, -73.742, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USB_C_USBC_0.geometry}
        material={materials.USBC}
        position={[0, -79.691, 0]}
      />
      <mesh
        name='ecran_phone'
        castShadow
        receiveShadow
        geometry={nodes.Screen_Screen_0.geometry}
        material={materials.Screen}
        position={[0, 0, -43.93]}
      >
        <meshBasicMaterial map={txt} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base_Alluminium_0.geometry}
        material={materials.Alluminium}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base_Base_0.geometry}
        material={materials.Base}
      />
    </group>
  )
}

useGLTF.preload('/models/smartphone.glb')

export default Phone;
