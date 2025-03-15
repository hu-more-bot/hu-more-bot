import { Canvas } from "@react-three/fiber";

interface classes {
  className?: string
  offset? : number
  children : JSX.Element
  width : string
  height : string
}

export default function Experience({ className, offset, children, width, height }: classes): JSX.Element {
  return (<Canvas
    camera={{
      position: [0, 2, 0],
      rotation: [Math.PI/-8, 0, 0],
      fov: 75,
    }}
    style={{ width: width, height: height, maxWidth: "100vw", maxHeight: "100vh", translate: `0px ${(offset ? offset : 0)/-5}px`  }}

    className={className}

    shadows
  >
   {children}
  </Canvas>)
}