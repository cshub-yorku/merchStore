import { Brightness1 } from "@mui/icons-material"
import { textAlign } from "@mui/system"

export const centerItem = {
    display: "flex",
    justifyContent: "center"
}

export const merchBillboardContainer = {
    width: "100vw",
    height: "40vh",
    margin: "4vh auto",
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

export const MerchAppBar = {
    boxShadow: "none",
    align: "center",
    justifyItems: "center",
}

export const varColor = {
    color: "#ed6d11"
}
export const merchColor = {
    color: "#624f82"
}

export const MerchToolbar = {
    position: 'absolute',
    top: '35%',
    left: '4vw'
}