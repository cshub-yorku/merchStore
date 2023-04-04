export const cardStyle = (theme) => ({
    [theme.breakpoints.down("tablet")]: {
        width: '90vw',
        height: '90vw',
    },
    [theme.breakpoints.up("tablet")]: {
        width: '33vw',
        height: '33vw',
    },
    [theme.breakpoints.up("hd")]: {
        width: '33vw',
        height: '33vw',
    },
    [theme.breakpoints.up("fhd")]: {
        width: '25vw',
        height: '25vw',
    },
});

export const itemStackStyle = {
    maxWidth: '100%',
}

export const itemImage = {
    width: '25%',
    height: '100%',
    mr: 1,
}

export const itemContainer = {
    minWidth: "75%",
    m: 1,
}

export const headers = {
    textAlign: 'left',
    mb: 1
}

export const mainHeader = {
    fontSize: '1.5em'
}

export const subHeader = {
    fontSize: '0.75em'
}

export const itemBtnGroup = {
    width: '35%',
    height: '30px',
}

export const quantity_black = {
    bgcolor: "#000",
    color: '#FFF',

    height: '30px',
    px: 2,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const btnStyle = {
    height: '30px'
}

export const prices = {
    ml: 1,
    fontSize: "0.85em",
}

export const bottomBtnBox = {
    position: 'absolute',
    bottom: '3%',
    left: '50%',
    transform: 'translateX(-50%)',

    width: '100%',
}

export const checkoutBtn = {
    p: 3,
    mt: 3,
    width: '80%',
    borderRadius: '12px',
}

export const button_gray = {
    bgcolor: "#3E3E3E",
    color: '#FFFFFF',
    '&:hover': {
        bgcolor: '#FFF',
        color: '#3E3E3E'
    }
}

export const white_divider = {
    background: 'white',
}

export const cart_item_total = {
    textAlign: 'right', 
    m: 1, 
    fontSize: '24px'
}