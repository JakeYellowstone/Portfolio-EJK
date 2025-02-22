import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react"

const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef();
    useFrame((state, delta) => {
        
        
        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [0,state.pointer.x, 0], 0.25, delta);
        }
    })
        
    return (
    <group ref={groupRef} scale={isMobile ? 1 : 1}>{children}</group>
  )
}

export default HeroCamera