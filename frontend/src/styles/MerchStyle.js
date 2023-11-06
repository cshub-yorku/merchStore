import { Brightness1 } from "@mui/icons-material"
import { textAlign } from "@mui/system"

export const merchBillboardContainer = {
    width: "100vw",
    height: "40vh",
    margin: "auto",
    position: "relative",
}

export const merchBillboardImage = {
    objectFit: 'cover',
    width: "100%",
    height: "100%",
    filter: "brightness(50%)",

}

export const merchTextboard = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    textAlign: "center",
    color: "white",
}
