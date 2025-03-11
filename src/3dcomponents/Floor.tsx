import { Edges } from "@react-three/drei";
import colors from "../colors";
import { Color } from "three";

export default function Floor(): JSX.Element {
  return (<>
    <mesh rotation={[Math.PI / -2, 0, 0]} position={[0, -2, -7.5]} receiveShadow>
      <circleGeometry args={[4, 100]} />
      <meshBasicMaterial color={new Color(colors.surface400.hex)} />
      <Edges lineWidth={3} color={new Color(colors.surface50.hex)} />
    </mesh>
  </>)
}
