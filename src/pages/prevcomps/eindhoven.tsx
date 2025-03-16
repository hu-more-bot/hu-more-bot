export default function eindhoven(props : DeviceInformation): JSX.Element{
    return (<div className="min-h-screen flex flex-col">
        <div className="flex-1 content-center text-center text-2xl">
            Photos
        </div>
        <div className="flex-3 content-center text-center">
            <div>
                the actual photos + 
                {props.scrollOffset}
            </div>
        </div>
        
    </div>)
}