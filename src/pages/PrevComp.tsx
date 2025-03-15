import { useEffect, useState } from "react";
import ScrollDown from "../components/ScrollDown"
import colors from "../colors";
import TopbarPreviousComps from "../components/TopbarPreviousComps";

interface PrevComp {
    title: string
    content: (props: DeviceInformation) => JSX.Element
}

export default function PrevComp({ title, content }: PrevComp): JSX.Element {

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
        const handleHashChange = (hash: string, force: boolean) => {
            if ((!hash && hash != "") || (hash === lastHash && force == false)) return;

            let element
            if (hash == "") {
                element = document.getElementById("index");
            }
            else {
                element = document.getElementById(hash);
            }

            lastHash = hash;


            if (element) {
                history.pushState(null, "", `#${hash}`); // Update URL without triggering default jump
                element.scrollIntoView({ behavior: "smooth", block: "start" });

            }
        };

        const checkHash = () => {


            const hash = window.location.hash.substring(1);
            handleHashChange(hash, false);
        };

        // Intercept anchor tag clicks to prevent instant jump
        const interceptAnchorClicks = (event: MouseEvent) => {
            const target = event.target as HTMLAnchorElement;

            if (target.tagName === "A" && (target.hash || target.hash == "") && target.id=="topbar") {
                event.preventDefault(); // Stop default hash jump
                handleHashChange(target.hash.substring(1), true); // Manually smooth scroll
                return
            }

        };

        window.addEventListener("hashchange", checkHash);
        document.addEventListener("click", interceptAnchorClicks); // Catch clicks

        checkHash(); // Run on first load if there's a hash

        return () => {
            window.removeEventListener("hashchange", checkHash);
            document.removeEventListener("click", interceptAnchorClicks);
        };
    }, [])


    return (<div className="relative scheme-only-dark ">
        <TopbarPreviousComps scrollOffset={offset} isMobile={isMobile} appear={150} />
        <div className="max-h-screen max-w-screen min-h-screen min-w-screen overflow-y-auto  absolute z-10 bg-surface-900 top-0" id="content" onScroll={(event) => { setOffset(event.currentTarget.scrollTop) }}>

            <div className="flex place-content-center items-center relative min-h-screen" id="index">
                <div className="md:text-9xl text-5xl bg-clip-text text-transparent select-none font-stretch-50% bg-gradient-to-r from-secondary-200 to-secondary-700 font-mono ">
                    {title}
                </div>
                <ScrollDown scrollOffset={offset} disappear={100} color={colors.secondary500} />
            </div>
            <div className="border-t-2 border-secondary-500 text-secondary-200 min-h-screen">
                {content({ isMobile: isMobile, scrollOffset: offset, windowDimension: windowDimensions })}
            </div>
        </div>
    </div>)
}