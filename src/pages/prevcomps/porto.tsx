

export const PortoIdentifier : PrevCompIdentifiers= {
    name: "Porto",
    year: 2022,
    images: [{src: "/pictures/eindhovensuperteam.jpg", description: "placeholder porto"},{src: "https://media1.tenor.com/m/KK_I62rBKLUAAAAd/bad-apple-manu.gif", description: "apple != bad"}],
    model: (    <mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="#6be092" />
      </mesh>)
}
