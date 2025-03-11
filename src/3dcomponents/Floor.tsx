import { Edges, MeshReflectorMaterial } from "@react-three/drei";
import colors from "../colors";
import { Color } from "three";

export default function Floor(): JSX.Element {
  return (<>
    <mesh rotation={[Math.PI/-2, 0, 0]} position={[0, -2, -7.5]}>
      <circleGeometry args={[4, 100]} />
      <MeshReflectorMaterial
    blur={300} // Blur ground reflections (width, height), 0 skips blur
    mixBlur={10} // How much blur mixes with surface roughness (default = 1)
    mixStrength={1.1} // Strength of the reflections
    mixContrast={1.6} // Contrast of the reflections
    resolution={300} // Off-buffer resolution, lower=faster, higher=better quality, slower
    mirror={0.4} // Mirror environment, 0 = texture colors, 1 = pick up env colors
    depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
    minDepthThreshold={0} // Lower edge for the depthTexture interpolation (default = 0)
    maxDepthThreshold={0} // Upper edge for the depthTexture interpolation (default = 0)
    depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
    reflectorOffset={-1} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
    color={new Color(colors.surface300.hex)}
  />
  <Edges lineWidth={3} color={new Color(colors.surface50.hex)}/>
    </mesh>
  </>)
}
