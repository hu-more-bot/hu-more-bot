interface DeviceInformation{
    isMobile? : boolean
    scrollOffset? : number
    windowDimension? : {width : number, height : number}
}

interface PrevCompIdentifiers{
    name: string
    images?: { src: string, description: string }[]
    model?: JSX.Element
    robotName? :string
    year: number
    clickableModel? : boolean
}