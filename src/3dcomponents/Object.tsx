import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CarModel } from "./Low-poly-f1-car";

export default function Object():JSX.Element{
          const objectRef = useRef<THREE.Group>(null); // Move ref above useFrame
        
          useFrame(() => {
            if (objectRef.current) {

              objectRef.current.rotation.y += 0.01;
            }
          });
    return (<>
        <CarModel ref={objectRef} castShadow  position={[0, -2, -7.5]} rotation={[0,0,0]} scale={[0.5,0.5,0.5]}/>
    </>)
}