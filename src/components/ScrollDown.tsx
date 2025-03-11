import { FaAngleDoubleDown } from "react-icons/fa";

interface ScrollDown{
    scrollOffset : number,
    disappear : number
}


export default function ScrollDown({scrollOffset, disappear} : ScrollDown) : JSX.Element {
    return (<div className="absolute bottom-16 right-10 text-lg font-light font-mono font-stretch-50% text-warning-500 flex items-center" style={{opacity: Math.max(0,  1-scrollOffset/disappear)}}>
            <FaAngleDoubleDown size={"35px"}/>
        </div>)
}