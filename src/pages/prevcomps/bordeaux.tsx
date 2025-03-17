export default function bordeaux(props: DeviceInformation): JSX.Element {
    return (<div className="max-h-screen flex flex-col">
        <div className="flex-6 min-h-10 content-center text-center text-2xl bg-pink-50">
            Photos
        </div>
        <div className="flex-3 flex place-content-center items-center max-h-full">
            <div className="aspect-video  items-center flex overflow-x-scroll snap-x *:snap-center touch-pan-x *:min-w-screen *:flex *:flex-col *:items-center **:first:max-h-[60vh] **:first:max-w-[80vw] **:first:object-contain **:first:flex **:first:place-content-center">
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

    </div>)
}