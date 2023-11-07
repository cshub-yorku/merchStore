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

    boxShadow: 4,
    backgroundColor: "#624F82",
    borderRadius: 2.5,

    mb: '10%'
});
export const cardImage = {
    borderRadius: 1,
    boxShadow: 4,

    objectFit: 'cover',
    filter: 'drop-shadow(0px 0px 23px rgba(0, 0, 0, 0.3))',

    cursor: 'pointer',
}

export const cardButton = {
    alignItems: 'center',
    height: '70%',
    width: '60%',
    ml: 'auto',
    mr: '5%',
    boxShadow: 4,
}

export const cardTextBox = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    ml: '1vw',
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
    height: '20hv',

    [theme.breakpoints.down('tablet')]: {
        mx: '4%',
    },
    [theme.breakpoints.down('hd')]: {
        mx: '2%',
    }
})