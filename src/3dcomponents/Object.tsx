import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import colors from "../colors";
import { Color } from "three";

export default function Object():JSX.Element{
          const cubeRef = useRef<THREE.Mesh>(null); // Move ref above useFrame
        
          useFrame(() => {
            if (cubeRef.current) {

              cubeRef.current.rotateY(0.01);
            }
          });
    return (<>
        <mesh position={[0, -0.5, -7.5]} ref={cubeRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={new Color(colors.secondary500.hex)} />
        </mesh>
    </>)
}