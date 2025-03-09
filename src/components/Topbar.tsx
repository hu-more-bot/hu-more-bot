
import colors from "../colors"
import { FiGithub } from "react-icons/fi";

interface Topbar {
    scrollOffset: number
    appear: number
    isMobile: boolean
}

const TopBarButtons: { label: string | JSX.Element, redirect: string }[] = [{
    label: "For Sponsors",
    redirect: "/#sponsors"
}, {
    label: "About Us",
    redirect: "/#sponsors"
}, {
    label: "History",
    redirect: "/#sponsors"
}, {
    label: <><FiGithub size={"20px"} /></>,
    redirect: "https://github.com/hu-more-bot"
}]

const backgroundColor = colors.tertiary900
const borderColor = colors.secondary900

// not my proudest work
export default function Topbar({ scrollOffset, appear, isMobile }: Topbar): JSX.Element {
    if(!isMobile){
        return (<>
    
            <div style={{ backgroundColor: `rgba(${backgroundColor.rgb.red}, ${backgroundColor.rgb.green}, ${backgroundColor.rgb.blue}, ${Math.min(1, scrollOffset / appear) - 0.5})`, borderColor: `rgba(${borderColor.rgb.red}, ${borderColor.rgb.green}, ${borderColor.rgb.blue}, ${Math.min(1, scrollOffset / appear)})` }} className="h-14 text-secondary-300 absolute w-screen *:flex-1/2 flex place-content-center items-center z-20 backdrop-blur-xl border-b-2 ">
                {TopBarButtons.map((value) => (
                    <a href={value.redirect}>
                        {value.label}
                    </a>
                ))}
            </div>
            </>)
    }
    return (<>
    
    <div style={{ backgroundColor: `rgba(${backgroundColor.rgb.red}, ${backgroundColor.rgb.green}, ${backgroundColor.rgb.blue}, ${Math.min(1, scrollOffset / appear) - 0.5})`, borderColor: `rgba(${borderColor.rgb.red}, ${borderColor.rgb.green}, ${borderColor.rgb.blue}, ${Math.min(1, scrollOffset / appear)})` }} className="h-14 text-secondary-300 absolute w-screen *:flex-1/2 flex place-content-center items-center z-20 backdrop-blur-xl border-b-2 ">
        Mobile Top bar
    </div>
    </>)
}