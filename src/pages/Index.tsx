import { lazy, useEffect, useState } from "react";
import Topbar from "../components/TopbarMain";
import ScrollDown from "../components/ScrollDown";
import colors from "../colors";

const Experience = lazy(() => import('../components/Experience'))
const Background = lazy(() => import("../3dcomponents/Background"))
let lastHash = ""

function Index(): JSX.Element {
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

    // use effect for handling hash change
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

            if (target.tagName === "A" && (target.hash || target.hash == "") && target.id == "topbar") {
                event.preventDefault(); // Stop default hash jump
                handleHashChange(target.hash.substring(1), true); // Manually smooth scroll
                return
            }
            if (target.tagName === "svg" && target.id == "indexButton") {
                event.preventDefault()
                handleHashChange("", true)
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
    }, []);



    return (

        <div className="relative scheme-only-dark">
            <Topbar scrollOffset={offset} appear={150} isMobile={isMobile} />
            <div className="max-h-screen max-w-screen min-h-screen min-w-screen overflow-y-auto  absolute z-10  top-0" id="content" onScroll={(event) => { setOffset(event.currentTarget.scrollTop) }}>
                {/* TITLE SCREEN */}
                <div className="flex place-content-center items-center relative min-h-screen" id="index">
                    <div className="md:text-9xl text-5xl bg-clip-text text-transparent select-none font-stretch-50% bg-gradient-to-r from-primary-300 to-primary-700 font-mono -translate-y-44 ">
                        Hu-More-Bot
                    </div>
                    <ScrollDown scrollOffset={offset} disappear={100} color={colors.warning500} />
                </div>
                <div className="*:border-t *:border-surface-900 *:backdrop-blur-xl *:text-primary-100 *:text-justify *:pt-12 *:items-center *:flex *:flex-col *:rounded-t-3xl">
                    {/* ABOUT US SECTION */}
                    <div className="bg-surface-700/60 translate-y-10 " id="about">
                        <div className="font-mono underline underline-offset-2 text-4xl my-8">
                            About Us
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-sm md:text-lg pb-8">
                            The Hu-More-Bot team was originally founded in 2019 under the name Robo quartet. <br />
                            We all love robotics and technology, that’s what brought us together as a team, although the team members have changed over the years. Our team has been accumulating success since the beginning, because in the year of its foundation, we won the MIRK 2019 OnStage league with our performance “The Bremen Town Musicians”. <br />

                            In the same year, some of us from the team also participated in other competitions, such as the Robot Exatlon held in Nyíregyháza. After that, as we all remember, the 2020-21 pandemic followed and the whole country was forced to work from home, but this did not deter us. We spent these two years preparing a more ambitious show called Treasure hunters.
                            With this performance, we achieved not only domestic but international success, as we made it to the 2022 RoboCup Junior Europen in Porto, from which we returned with the special award for Best Technical Solutions. This competition gave us a huge boost, as we decided that we would like to qualify for next year’s World Championship.  <br />

                            So we started working under the name Hu-More-Bot. Their performance in 2023 was called The Ladybug of Szeged, which was also a great success with the Hungarian audience, as it was about a Hungarian invention, Dr. Dániel Muszka’s robot ladybug, so we made it to the second time. This time, however, we traveled to Bordeaux, France, for the World Championship. <br />

                            This competition is a world-wide known and recognized competition, where not only the competition but also the technological innovations are given considerable emphasis. This competition provided us with a great experience and we also won the OnStage superteam league with the Slovak and Japanese teams in 2023.<br />

                            We are currently looking for sponsors for our trip to the World Cup this year in Salvador, Brazil.<br />
                        </div>
                    </div>
                    {/* OUR PREVIOUS COMPETITIONS - HISTORY */}
                    <div className="bg-surface-800/70  translate-y-5" id="history">
                        <div className="font-mono underline underline-offset-2 text-4xl my-8">
                            Previous Competitions
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-sm md:text-lg ">
                            <a href="/#eindhoven">Eindhoven 2024</a>
                            <a href="/#bordeaux">Bordeaux 2023</a>
                            <a href="/#porto">Porto 2022</a>

                        </div>
                    </div>
                    {/* FOR SPONSORS SECTION */}
                    <div className="bg-surface-900/80 " id="sponsors">
                        <div className="font-mono underline underline-offset-2 text-4xl my-8">
                            Perks of being a sponsor include:
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-sm md:text-lg ">
                            <div>
                                <div>
                                    A spot on our T-Shirt
                                </div>
                                <div>
                                    Every Sponsor will get a spot on our T-Shirts that we will wear almost every day to the European and the International rounds of the competitions.
                                </div>
                            </div>
                            <div>
                                <div>
                                    A spot in our On Stage performance
                                </div>
                                <div>
                                    We will get a stickers that have the logos of our sponsors on them, and because we are making race cars this year we will put them on the cars like on the real F1 cars!
                                </div>
                            </div>

                            <div>
                                Our previous sponsors include:
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Experience className="transition-none" offset={offset} width="100vw" height="100vh">
                <Background />
            </Experience>
        </div>
    );
}

export default Index;