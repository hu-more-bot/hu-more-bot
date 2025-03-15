import hexRgb, { RgbaObject } from "hex-rgb"

export class Color{
    rgb : RgbaObject
    hex : string

    constructor (_hex : string){
        this.hex = _hex

        this.rgb = hexRgb(_hex, {format : "object"})
    }
}

export default {

    primary50: new Color("#FCEEDD"),
    primary100: new Color("#FBE7D1"),
    primary200: new Color("#FAE1C6"),
    primary300: new Color("#F7CFA3"),
    primary400: new Color("#F0AA5F"),
    primary500: new Color("#EA862A"),
    primary600: new Color("#D37917"),
    primary700: new Color("#B06514"),
    primary800: new Color("#8C5010"),
    primary900: new Color("#73420D"),

    secondary50: new Color("#EFF8F2"),
    secondary100: new Color("#EAF5ED"),
    secondary200: new Color("#E5F3E9"),
    secondary300: new Color("#D5EBDD"),
    secondary400: new Color("#B6DCD0"),
    secondary500: new Color("#97CEA5"),
    secondary600: new Color("#88B995"),
    secondary700: new Color("#719B7C"),
    secondary800: new Color("#5B7C63"),
    secondary900: new Color("#4A6551"),

    tertiary50: new Color("#DAF4F9"),
    tertiary100: new Color("#CDF0F6"),
    tertiary200: new Color("#C1EDF4"),
    tertiary300: new Color("#9BE2EE"),
    tertiary400: new Color("#51CCE1"),
    tertiary500: new Color("#06B6D4"),
    tertiary600: new Color("#05A4BF"),
    tertiary700: new Color("#05959F"),
    tertiary800: new Color("#046D7F"),
    tertiary900: new Color("#035A68"),

    success50: new Color("#EDF7E7"),
    success100: new Color("#E6F5DF"),
    success200: new Color("#E0F2D7"),
    success300: new Color("#CEEAD4"),
    success400: new Color("#A9DB8E"),
    success500: new Color("#84CB5D"),
    success600: new Color("#77B754"),
    success700: new Color("#639846"),
    success800: new Color("#4F7A38"),
    success900: new Color("#41632E"),

    warning50: new Color("#FDF3DE"),
    warning100: new Color("#FCEAD3"),
    warning200: new Color("#FCECC8"),
    warning300: new Color("#FADAA7"),
    warning400: new Color("#F6C565"),
    warning500: new Color("#F2AC23"),
    warning600: new Color("#D99B20"),
    warning700: new Color("#B6811A"),
    warning800: new Color("#915C15"),
    warning900: new Color("#775411"),

    error50: new Color("#F9ECEB"),
    error100: new Color("#F7E5E4"),
    error200: new Color("#F5DFDD"),
    error300: new Color("#F8CBBD"),
    error400: new Color("#E2A5A1"),
    error500: new Color("#D57E78"),
    error600: new Color("#C0716C"),
    error700: new Color("#A05F5A"),
    error800: new Color("#805C48"),
    error900: new Color("#6A3E3B"),

    surface50: new Color("#E2E1E0"),
    surface100: new Color("#D9D7D6"),
    surface200: new Color("#CFCBCB"),
    surface300: new Color("#B2AFA8"),
    surface400: new Color("#79736F"),
    surface500: new Color("#3F3731"),
    surface600: new Color("#39322C"),
    surface700: new Color("#2F2925"),
    surface800: new Color("#26211D"),
    surface900: new Color("#1F1B18")
};