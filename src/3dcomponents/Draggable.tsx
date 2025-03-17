import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface Draggable {
    children: JSX.Element
}

export default function Draggable({ children }: Draggable): JSX.Element {
    return (
        <Canvas
            camera={{
                position: [0, 1, -1.5],
                rotation: [0, 0, 0],
                fov: 75,
            }}
            style={{ width: "100vw", height: "85vh", maxWidth: "100vw", maxHeight: "100vh"}}


        >
            <directionalLight position={[0, 1.5, 0]}
                rotation={[Math.PI / -6, 0, 0]} intensity={2} />
            <ambientLight position={[0, 0, 0]} intensity={1} />
            <OrbitControls enableZoom={false} target={[0,0,0]}/>
            {children}
        </Canvas>


    )

}