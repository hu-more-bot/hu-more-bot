import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import colors from "../colors";
import {Color} from "three";

export default function Background(): JSX.Element {
      const cubeRef = useRef<THREE.Mesh>(null); // Move ref above useFrame
    
      useFrame(() => {
        if (cubeRef.current) {
          cubeRef.current.rotateX(0.01);
          cubeRef.current.rotateY(0.01);
        }
      });

    return (<>
        <OrbitControls makeDefault />
        <ambientLight position={[2.94, -1.06, 5.36]} intensity={1} />
        <directionalLight
            intensity={1.5} // Fixed negative intensity
            position={[0, 2.22, -5.5]}
            castShadow
        />
        <directionalLight intensity={1.02} position={[0, 2.32, 7.2]} castShadow />
        <mesh position={[0, 0.57, 0]} ref={cubeRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={new Color(colors.secondary500.hex)} />
        </mesh>
    </>)
}