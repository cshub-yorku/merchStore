import { height, width } from "@mui/system"

export const productSubImage = {
    width: "25%",
    borderRadius: 4,

    '&:hover': {
        border: '1px solid',
        borderColor: '#FFF',
    }
}

export const productMainImage = {
    width: "60%",
    height: '65%',
    mb: 5,
    borderRadius: 7
}

export const closeButton = {
    position: 'absolute',
    right: 2,
    top: 2,
}

export const productMain = (theme) => (
    {
        bgcolor: theme.palette.primary.main,
        // bgcolor: "#624F82",
        width: "50%",
        height: "100%",
        border: "#FFFFFF",
        px: '1%'
    }
)

export const productPriceBox = {
    position: "absolute",
    ml: "96%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    bgcolor: "#2C3555",
    borderRadius: "5px",
    px: "12%",
}

export const productPriceText = {

}

export const productBuy = {
    position: "relative",
    display: "flex",
    width: "18vw",
    height: "7%"
}

export const productBuyButton = {
    height: "100%",
    width: "100%"
}