import { useEffect, useState } from "react";
import ScrollDown from "../components/ScrollDown"
import colors from "../colors";
import TopbarPreviousComps from "../components/TopbarPreviousComps";
import Draggable from "../3dcomponents/Draggable";

export default function PrevComp({ prevComp }: { prevComp: PrevCompIdentifiers }): JSX.Element {

    const [offset, setOffset] = useState(0)


    // window dimension
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [isMobile, setIsMobile] = useState(windowDimensions.height > windowDimensions.width || windowDimensions.width < 600 || windowDimensions.height < 600)

    const handleResize = () => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        setIsMobile(windowDimensions.height > windowDimensions.width || windowDimensions.width < 600 || windowDimensions.height < 600)

    };


    // use effect for handling resizing
    useEffect(() => {

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };


    });

    // handling scrolling to top when refreshing
    useEffect(() => {
        const scrollTop = () => {
            const element = document.getElementById("index")

            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }

        window.addEventListener("hashchange", scrollTop);

        scrollTop(); // Run on first load if there's a hash

        return () => {
            window.removeEventListener("hashchange", scrollTop);
        };
    }, [])


    return (<div className="relative scheme-only-dark">
        <TopbarPreviousComps scrollOffset={offset} isMobile={isMobile} appear={150} />
        <div className="max-h-screen max-w-screen min-h-screen min-w-screen overflow-y-auto  absolute z-10 bg-surface-900 top-0 text-secondary-200" id="content" onScroll={(event) => { setOffset(event.currentTarget.scrollTop) }}>

            <div className="flex place-content-center items-center relative min-h-screen border-b-2 border-secondary-500" id="index">
                <div className="md:text-9xl text-5xl bg-clip-text text-transparent select-none font-stretch-50% bg-gradient-to-r from-secondary-200 to-secondary-700 font-mono ">
                    {prevComp.name} {prevComp.year}
                </div>
                <ScrollDown scrollOffset={offset} disappear={100} color={colors.secondary500} />
            </div>

            <div className=" flex flex-col border-b-2 pb-6 border-secondary-400">
                <div className="flex-1/6 min-h-10 content-center text-center text-4xl my-6 text-secondary-400">
                    Photos
                </div>
                <div className="flex-5/6 flex place-content-center items-center">
                    <div className=" items-center flex overflow-x-scroll snap-x py-4 px-4 *:snap-center touch-pan-x mx-3 lg:mx-10 *:w-[85vw] *:px-2 *:flex *:flex-col *:items-center **:first:max-h-[60vh] **:first:max-w-[80vw] **:rounded-xl **:first:object-contain **:first:flex **:first:place-content-center text-secondary-800 border-2 border-tertiary-900 rounded-2xl bg-surface-800 *:*:first:border-2 *:*:first:border-tertiary-300 *:*:first:mb-2 text-center" id="images">
                        {prevComp.images?.map((image, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={image.src} alt={image.description} />
                                {image.description}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {prevComp.model &&
                <div className="max-h-screen text-center text-3xl -mt-4">
                    <div className="translate-y-10">
                        {prevComp.year}'s project
                        {prevComp.robotName && 
                        <div className="text-xl text-secondary-800">
                            Ladybug of Szeged
                        </div>
                        }
                    </div>


                    <div className="h-full flex place-content-center ">
                        <Draggable clickable={prevComp.clickableModel}>
                            {prevComp.model}
                        </Draggable>
                    </div>

                </div>
            }

        </div>
    </div>)
}