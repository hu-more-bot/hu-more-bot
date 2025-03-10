
import { useState } from "react";
import colors from "../colors"
import { FiGithub } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

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
        return (<>

            <div style={{ backgroundColor: `rgba(${backgroundColor.rgb.red}, ${backgroundColor.rgb.green}, ${backgroundColor.rgb.blue}, ${Math.min(1, scrollOffset / appear) - 0.5})`, borderColor: `rgba(${borderColor.rgb.red}, ${borderColor.rgb.green}, ${borderColor.rgb.blue}, ${Math.min(1, scrollOffset / appear)})` }} className="h-12 text-secondary-200 absolute w-screen  flex place-content-center items-center z-20 backdrop-blur-xl border-b-2 *:text-center ">

                <div className="flex-1/2 ml-25">
                    <a href="/#sponsors">
                        For Sponsors
                    </a>
                </div>
                <div className="flex-1/12">
                    <a href="/#history" >
                        History
                    </a>
                </div>
                <div className="flex-1/2 ml-25">
                    <a href="/#about">
                        About Us
                    </a>
                </div>

                <a href="https://github.com/hu-more-bot" className="border-l-2 w-25 flex place-content-center">
                    <FiGithub size={"25px"} />
                </a>



            </div>
        </>)
    }

    const [drawerOpen, setDrawerOpen] = useState(false)

    const openDrawer = () => { setDrawerOpen(true) }
    const closeDrawer = () => { setDrawerOpen(false) }
    return (<>

        <div style={{ backgroundColor: `rgba(${backgroundColor.rgb.red}, ${backgroundColor.rgb.green}, ${backgroundColor.rgb.blue}, ${Math.min(1, scrollOffset / appear) - 0.5})`, borderColor: `rgba(${borderColor.rgb.red}, ${borderColor.rgb.green}, ${borderColor.rgb.blue}, ${Math.min(1, scrollOffset / appear)})` }} className="h-12 text-secondary-200 absolute w-screen *:flex-1/2 flex place-content-center items-center z-20 backdrop-blur-xl border-b-2 text-lg">
            <button className="ml-5" onClick={openDrawer}>
                <MdMenu color={colors.secondary200.hex} size={"25px"} />
            </button>
            <div className="text-center font-mono font-stretch-50% font-light">
                Hu-More-Bot
            </div>

            <Drawer open={drawerOpen} onClose={closeDrawer} direction="left" duration={80} size={"400px"} >
                <div className="bg-tertiary-900 h-screen p-3 backdrop-blur-xl flex flex-col text-center">

                    <div className="flex-1/2">
                        <a href="/#sponsors" >
                            For Sponsors
                        </a>
                    </div>
                    <div className="flex-1/2">
                        <a href="/#history">
                            History
                        </a>
                    </div>
                    <div className="flex-1/2">
                        <a href="/#about">
                            About Us
                        </a>
                    </div>
                    <div className="flex   place-content-center border-t-2  items-center p-2 mx-8">
                        <a href="https://github.com/hu-more-bot" className="flex ">

                            Github <FiGithub size={"25px"} className="ml-4" />
                        </a>
                    </div>
                </div>
            </Drawer>
        </div>
    </>)
}