export const cardStyle = (theme) => ({
    display: 'flex',
    flexDirection: 'column',

    width: '25vw',
    height: '25vw',
    [theme.breakpoints.down("tablet")]: {
        width: '90vw',
        height: '90vw',
    },
    [theme.breakpoints.up("tablet")]: {
        width: '43vw',
        height: '43vw',
    },
    [theme.breakpoints.up("hd")]: {
        width: '33vw',
        height: '33vw',
    },
    [theme.breakpoints.up("fhd")]: {
        width: '25vw',
        height: '25vw',
    },

    boxShadow: 0,
    // backgroundColor: "#624F82",
    backgroundColor: "transparent",
    borderRadius: 2.5,

    mb: '10%',

    border: '2px solid transparent',
    transition: '200ms',

    '&:hover': {
        borderColor: 'white',
        transform: 'scale(1.1)',
    }
});
export const cardImage = {
    width: '100%',
    height: '77%',
    borderRadius: 2.5,

    boxShadow: 4,

    objectFit: 'cover',
    filter: 'drop-shadow(0px 0px 23px rgba(0, 0, 0, 0.3))',

    cursor: 'pointer',
}

export const cardButton = {
    alignItems: 'center',
    justifyContent: 'start',
    height: '70%',
    width: '20%',
    mr: 'auto',
    boxShadow: 0,

    color: '#FD8A21',
    bgcolor: 'transparent'
}

export const cardTextBox = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    mt: '2%'
}

export const cardLabel = {
    lineHeight: 1.2,
}

export const cardSubtitle = {
}

export const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export const cardNav = (theme) => ({
    my: 'auto',
    ml: '3%',
    height: '20hv',


    [theme.breakpoints.down('tablet')]: {
        mx: '4%',
    },
    [theme.breakpoints.down('hd')]: {
        mx: '2%',
    }
})