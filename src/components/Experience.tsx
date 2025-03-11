import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

interface classes {
  className?: string
  offset : number
}

const Background = lazy(()=>import("../3dcomponents/Background"))

export default function Experience({ className, offset }: classes): JSX.Element {
  return (<Canvas
    camera={{
      position: [0, 2, 0],
      rotation: [Math.PI/-8, 0, 0],
      fov: 75,
    }}
    style={{ width: "100vw", height: "100vh", maxWidth: "100vw", maxHeight: "100vh", translate: `0px ${offset/-5}px`  }}

    className={className}

    shadows
  >
    <Background />
  </Canvas>)
}