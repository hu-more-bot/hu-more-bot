import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

interface classes {
  className?: string
}

const Background = lazy(()=>import("../3dcomponents/Background"))

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