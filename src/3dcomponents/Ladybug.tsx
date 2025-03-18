import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSpring, a } from '@react-spring/three'
import { useEffect, useState } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    top: THREE.Mesh
    motor_holder: THREE.Mesh
    base: THREE.Mesh
  }
  materials: {
    ['0.917647_0.917647_0.917647_0.000000_0.000000']: THREE.MeshStandardMaterial
    ['0.647059_0.647059_0.647059_0.000000_0.000000']: THREE.MeshStandardMaterial
    ['0.231373_0.380392_0.705882_0.000000_0.000000']: THREE.MeshStandardMaterial
  }
}

export function LadybugModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3dFiles/ladybug-transformed.glb') as GLTFResult
  const [clicked, setClicked] = useState(false)
  const [willExplode, setWillExplode] = useState(false)
  const [mousePressed, setMousePressed] = useState(false)
  const [hoveringModel, setHoveringModel] = useState(false)

  // Animated scale value
  const { scale } = useSpring({
    scale: clicked ? 12 : 10,
    config: { mass: 1, tension: 170, friction: 20 },
  })

  // Animated position value
  const { position } = useSpring({
    position: clicked ? 0.02 : 0,
    config: { mass: 1, tension: 170, friction: 20 },
  })

  // Toggle explosion
  const toggle = () => {
    if (willExplode) {
      setClicked(!clicked)
      setWillExplode(false)
    }
  }

  // Handle mouse events
  const handlePointerOver = () => {
    setHoveringModel(true)
  }

  const handlePointerLeave = () => {
    setHoveringModel(false)
    setWillExplode(false)
  }

  useEffect(() => {
    const handleMouseDown = () => setMousePressed(true)
    const handleMouseUp = () => setMousePressed(false)

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Set cursor based on interaction state
  useEffect(() => {
    const element = document.getElementById("draggable")
    if(element){
    if (mousePressed) {
      element.style.cursor = 'grabbing'
    } else if (hoveringModel) {
      element.style.cursor = 'pointer'
    } else {
      element.style.cursor = 'auto'
    }}
  }, [mousePressed, hoveringModel])

  return (
    <a.group
      {...props}
      dispose={null}
      position={[-0.2, 0, 0]}
      rotation={[Math.PI * 3.5, 0, Math.PI * 2]}
      scale={scale.to(s => [s, s, s])}
      onClick={toggle}
      onPointerDown={() => setWillExplode(true)}
      onPointerOver={handlePointerOver}
      onPointerLeave={handlePointerLeave}
    >
      {/* Animate the top mesh position */}
      <a.mesh 
        geometry={nodes.top.geometry} 
        material={materials['0.917647_0.917647_0.917647_0.000000_0.000000']} 
        position={position.to(s => [0, 0, s * 2])}
      />

      {/* Keep motor_holder static */}
      <mesh 
        geometry={nodes.motor_holder.geometry} 
        material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']} 
      />

      {/* Animate the base mesh position */}
      <a.mesh 
        geometry={nodes.base.geometry} 
        material={materials['0.231373_0.380392_0.705882_0.000000_0.000000']} 
        position={position.to(s => [0, 0, -s])}
      />
    </a.group>
  )
}

useGLTF.preload('/3dFiles/ladybug-transformed.glb')
