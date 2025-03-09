import Floor from "./Floor"
import Object from "./Object"

export default function Background(): JSX.Element {


    return (<>
        <directionalLight position={[0, 1.5, 0]}
      rotation={[Math.PI/-6, 0, 0]} intensity={2}/>
        <ambientLight position={[0,0,0]} intensity={1} />

        <Object/>
        <Floor/>

    </>)
}