import { SwapSpinner } from "react-spinners-kit";
import colors from "../colors";

export default function Loading(): JSX.Element {
    return (
        <div className="min-h-screen  flex place-content-center items-center">
            <SwapSpinner size={80} color={colors.primary50.hex} />
        </div>
    )
}