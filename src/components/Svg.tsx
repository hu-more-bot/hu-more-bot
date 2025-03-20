
export enum svgs{
    monoLogo = "/pictures/logo_monochrome.svg",
    Logo = "/pictures/logo.svg"
}

export default function SVG({svgType, size, id} : {svgType : svgs, size : number, id? : string}){
    return (<>
        <img src={svgType} alt="SVG" height={size} width={size}  id={id}/>
    </>)
}