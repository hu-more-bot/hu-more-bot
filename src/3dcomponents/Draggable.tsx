import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MdAdsClick } from "react-icons/md";
import { TbRotate360 } from "react-icons/tb";

interface Draggable {
    children: JSX.Element
    clickable?: boolean
}

export default function Draggable({ children, clickable }: Draggable): JSX.Element {
    return (
        <div className="relative w-[700px] h-[85vh] max-w-full max-h-screen">
            {/* Canvas */}
            <Canvas
                camera={{
                    position: [0, 1, -1.5],
                    rotation: [0, 0, 0],
                    fov: 85,
                }}
                className="w-full h-full"
                id="draggable"
            >
                <directionalLight position={[0, 1.5, 0]}
                    rotation={[Math.PI / -6, 0, 0]} intensity={2} />
                <ambientLight position={[0, 0, 0]} intensity={1} />
                <OrbitControls enableZoom={false} target={[0,0,0]} enablePan={false} autoRotate/>
                {children}
            </Canvas>

            <div className="absolute bottom-16 left-4">
                <TbRotate360 size={35} title="Rotate the model by dragging it!"/>
            </div>

            {clickable &&
                <div className="absolute bottom-16 right-4">
                    <MdAdsClick size={35}  title="Click the Model!"/>
                </div>
            }
        </div>


    )

}