import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Monitor  = (props) => {
  const { nodes, materials } = useGLTF('/models/monitor.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.wire_224198087}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.wire_224198087}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/monitor.glb')

export default Monitor;
