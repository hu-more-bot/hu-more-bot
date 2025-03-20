
import { useState } from "react";
import colors from "../colors"
import { FiGithub } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import Drawer from 'react-modern-drawer'
import SVG, { svgs } from "./Svg";


interface Topbar {
    scrollOffset: number
    appear: number
    isMobile: boolean
}


const backgroundColor = colors.tertiary900
const borderColor = colors.secondary900

// not my proudest work
export default function Topbar({ scrollOffset, appear, isMobile }: Topbar): JSX.Element {
    if (!isMobile) {
        // if the user is on pc, or at least a larger screen
        return (<>

            <div style={{ backgroundColor: `rgba(${backgroundColor.rgb.red}, ${backgroundColor.rgb.green}, ${backgroundColor.rgb.blue}, ${Math.min(0.5, scrollOffset / appear)})`, borderColor: `rgba(${borderColor.rgb.red}, ${borderColor.rgb.green}, ${borderColor.rgb.blue}, ${Math.min(1, scrollOffset / appear)})` }} className="h-12 text-secondary-200 absolute w-screen  flex place-content-center items-center z-20 backdrop-blur-xl border-b-2 *:text-center ">

                <a href="/#" className="w-25 border-r-2 flex place-content-center" id="topbar">
                    <SVG svgType={svgs.monoLogo} id="indexButton" size={25}/>
                </a>
                <div className="flex-1/2">
                    <a href="/#sponsors" id="topbar">
                        For Sponsors
                    </a>
                </div>
                <div className="flex-1/12">
                    <a href="/#history" id="topbar">
                        History
                    </a>
                </div>
                <div className="flex-1/2">
                    <a href="/#about" id="topbar">
                        About Us
                    </a>
                </div>

                <a href="https://github.com/hu-more-bot" className="border-l-2 w-25 flex place-content-center">
                    <FiGithub size={"25px"} />
                </a>



            </div>
        </>)
    }

    // if the user is on mobile
    const [drawerOpen, setDrawerOpen] = useState(false)

    const openDrawer = () => { setDrawerOpen(true) }
    const closeDrawer = () => { setDrawerOpen(false) }
    return (<div>

        <div style={{ backgroundColor: `rgba(${backgroundColor.rgb.red}, ${backgroundColor.rgb.green}, ${backgroundColor.rgb.blue}, ${Math.min(0.5, scrollOffset / appear)})`, borderColor: `rgba(${borderColor.rgb.red}, ${borderColor.rgb.green}, ${borderColor.rgb.blue}, ${Math.min(1, scrollOffset / appear)})` }} className="h-12 text-secondary-200 absolute w-screen *:flex-1/2 flex place-content-center items-center z-20 backdrop-blur-xl border-b-2 text-lg">
            <button className="ml-5" onClick={openDrawer}>
                <MdMenu color={colors.secondary200.hex} size={"25px"} />
            </button>
            <div className="text-center font-mono font-stretch-50% font-light" >
                Hu-More-Bot
            </div>
            <a className="flex-1/2" href="/#" id="topbar">
            <SVG svgType={svgs.monoLogo} id="indexButton" size={25}/>
            
            </a>


        </div>

        <Drawer open={drawerOpen} onClose={closeDrawer} direction="left" duration={80} size={"300px"} className="backdrop-blur-lg">
                <div className="bg-tertiary-900/80 h-screen p-2 flex flex-col text-center relative z-50 border-r-2 border-secondary-900 backdrop-blur-lg text- text-secondary-200">

                    <div className="flex-1/2 *:my-4 mx-13 text-xl">
                        <div className="" id="topbar">
                            <a href="/#sponsors" onClick={closeDrawer}>
                                For Sponsors
                            </a>
                        </div>
                        <hr />
                        <div className="" id="topbar">
                            <a href="/#history" onClick={closeDrawer}>
                                History
                            </a>
                        </div>
                        <hr />
                        <div className="" id="topbar">
                            <a href="/#about" onClick={closeDrawer}>
                                About Us
                            </a>
                        </div>

                    </div>
                    <div className="flex   place-content-center border-t-2  items-center pb-16 pt-8 mx-10 ">
                        <a href="https://github.com/hu-more-bot" className="flex text-xl">

                            Github <FiGithub size={"25px"} className="ml-4" />
                        </a>
                    </div>
                    <button className="absolute top-2 right-2 hover:cursor-pointer" onClick={closeDrawer}>
                        <IoMdClose size={"25px"}/>
                    </button>
                </div>
            </Drawer>
    </div>)
}