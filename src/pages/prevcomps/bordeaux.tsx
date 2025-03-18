import Draggable from "../../3dcomponents/Draggable";
import { Model } from "../../3dcomponents/Ladybug";

export default function bordeaux(_props: DeviceInformation): JSX.Element {



    return (
        <>
            <div className=" flex flex-col border-b-2 pb-6 border-secondary-400">
                <div className="flex-1/6 min-h-10 content-center text-center text-4xl my-6 text-secondary-400">
                    Photos
                </div>
                <div className="flex-5/6 flex place-content-center items-center">
                    <div className=" items-center flex overflow-x-scroll snap-x py-4 px-4 *:snap-center touch-pan-x mx-3 lg:mx-10 *:w-[85vw] *:px-2 *:flex *:flex-col *:items-center **:first:max-h-[60vh] **:first:max-w-[80vw] **:rounded-xl **:first:object-contain **:first:flex **:first:place-content-center text-secondary-800 border-2 border-tertiary-900 rounded-2xl bg-surface-800 *:*:first:border-2 *:*:first:border-tertiary-300 *:*:first:mb-2 text-center" id="images">
                        <div>
                            <img src="/pictures/eindhovensuperteam.jpg" />

                            Our team with the Japanese and Slovakian teams
                        </div>
                        <div>
                            <img src="/pictures/eindhovensuperteam.jpg" />
                            Our team with the Japanese and Slovakian teams

                        </div>
                        <div>
                            <img src="/pictures/eindhovensuperteam.jpg" />
                            Our team with the Japanese and Slovakian teams

                        </div>
                        <div>
                            <img src="/pictures/eindhovensuperteam.jpg" />
                            Our team with the Japanese and Slovakian teams

                        </div>
                    </div>
                </div>
            </div>
            <div className="max-h-screen text-center text-3xl -mt-4">
                <div className="translate-y-10">
                    2023s project
                    <div className="text-xl text-secondary-800">
                        Ladybug of Szeged
                    </div>
                </div>

                <div className="h-full flex place-content-center ">
                    <Draggable>
                        <Model />
                    </Draggable>
                </div>
            </div>
        </>)
}