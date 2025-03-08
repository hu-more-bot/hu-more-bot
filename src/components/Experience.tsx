import { Canvas } from "@react-three/fiber";
import Background from "../3dcomponents/Background";

interface classes {
  className?: string
}

export default function Experience({ className }: classes): JSX.Element {
  return (<Canvas
    camera={{
      position: [3, 3, -5],
      fov: 75,
    }}
    style={{ width: "100vw", height: "100vh", maxWidth: "100vw", maxHeight: "100vh" }}

    className={className}
  >
    <Background />
  </Canvas>)
}