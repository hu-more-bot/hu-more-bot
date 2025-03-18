

export const PortoIdentifier : PrevCompIdentifiers= {
    name: "Porto",
    year: 2022,
    images: [{src: "/pictures/eindhovensuperteam.jpg", description: "placeholder porto"},{src: "/pictures/eindhovensuperteam.jpg", description: "placeholder porto"}],
    model: (    <mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="#6be092" />
      </mesh>)
}