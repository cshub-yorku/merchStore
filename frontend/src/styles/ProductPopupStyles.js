export const productStyle = (theme) => ({
    bgcolor: "#000",

    [theme.breakpoints.up('fhd')]: {
        width: "62%",
        height: "72%",
        borderRadius: "2px",
    },

    [theme.breakpoints.down('mobile')]: {
        borderRadius: "0px",
    }
})

export const gridContainer = (theme) => ({

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(16, auto)',

    [theme.breakpoints.up('mobile')]: {
        width: 'auto',
        height: 'auto',
        bgcolor: 'white',
        m: '2%',
        borderRadius: '4px'
    },

    [theme.breakpoints.up('hd')]: {
        width: '100%', height: '100%',
        overflow: 'hidden',
        m: 0,
        bgcolor: 'transparent',
    },
})

export const imageGridContainer = (theme) => ({

    position: 'relative',

    [theme.breakpoints.up('mobile')]: {
        gridColumn: '1/3',
        gridRow: '2/9',
    },

    [theme.breakpoints.up('tablet')]: {

    },

    [theme.breakpoints.up('hd')]: {
        gridColumn: '1/1',
        gridRow: '1/17',
    },
})

export const headerGridContainer = (theme) => ({
    color: 'black',

    [theme.breakpoints.up('mobile')]: {
        gridColumn: '1/3',
        gridRow: '1/1',
        ml: '3%',
    },

    [theme.breakpoints.up('tablet')]: {

    },

    [theme.breakpoints.up('hd')]: {
        gridColumn: '2/2',
        gridRow: '1/1',
        ml: '4%',
        mr: '0%',
    },
})

export const bodyGridContainer = (theme) => ({
    mx: '5%',

    [theme.breakpoints.up('mobile')]: {
        gridColumn: '1/3',
        gridRow: '9/17',
        color: 'black'
    },

    [theme.breakpoints.up('tablet')]: {

    },

    [theme.breakpoints.up('hd')]: {
        gridColumn: '2/2',
        gridRow: '2/17',
    },
})

export const productSubImage = {

    width: "5%",


    // '&:hover': {
    //     border: '1px solid',
    //     borderColor: '#FFF',
    // }
}

export const productMainImage = (theme) => ({
    aspectRatio: '1 / 1',
    width: "100%",
    height: '100%',
    objectFit: 'cover',

    // [theme.breakpoints.up('mobile')]: {
    //     // height: '96vw'
    // },

    [theme.breakpoints.up('hd')]: {
        height: '100%',
    },
})

export const subImages = {
    // left: '-25%',
    bottom: 0,
    position: 'absolute',
    width: "100%",
    borderRadius: 2
}

export const productMain = (theme) => (
    {
        bgcolor: theme.palette.primary.main,
        // width: "50%",
        // height: "100%",
        // border: "#FFFFFF",
        // px: '1%'
    }
)

export const header = (theme) => ({
    display: 'flex',
    flexDirection: "row",
    alignItems:'center',
    

    [theme.breakpoints.up('mobile')]: {
        my: '2%',
    },
    
    [theme.breakpoints.up('hd')]: {
        my: '0%',
    },
})

export const closeButton = {
    ml: 'auto',
    mr: '3%',
    color: 'black',
}

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

export const productBuy = (theme) => ({
    position: "relative",
    display: "flex",


    [theme.breakpoints.up('mobile')]: {
        width: '68%',
        height: "10%",
    },

    [theme.breakpoints.up('hd')]: {
        width: "18vw",
        height: "10%",
    }
})

export const productBuyButton = {
    height: "100%",
    width: "100%"
}

export const ToggledButton = {

}

export const ToggleButtonSeparations = {
    borderColor: 'white',
    border: 0,
    borderRight: 0,
    borderLeft: 10,
}

export const SizeButtonGroup = (theme) => ({


    "& .MuiToggleButtonGroup-grouped": {
        width: '33%',
    },

    [theme.breakpoints.up('mobile')]: {
        width: '100%',
        height: '8%',
    },

    [theme.breakpoints.up('hd')]: {
        width: '30%',
        height: '6%',
    }
})

export const helperNotation = {
    mt: '1%',
    mb: '3%',
    color: '#C8C8C8'
}

export const ProductPopover = {
    "& .MuiPaper-root": {
        bgcolor: "#000"
    }
}

export const PopoverText = {
    m: 1
}

