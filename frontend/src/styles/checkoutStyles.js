export const bodyGrid = (theme) => {
    return ({
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 1fr)',
        gridTemplateRows: 'repeat(auto-fit, 1fr)',
    })
}

export const container = (theme) => {
    return ({
        backgroundColor: '#000',
        boxShadow: "10px",
        borderRadius: '8px',
        [theme.breakpoints.up('mobile')]: {
            width: '90vw',
            minHeight: '90vh',
            mx: 'auto',
            my: 'auto',
        },
        [theme.breakpoints.down('mobile')]: {
            m: '0px',
            width: '100%',
            height: '100%',
            borderRadius: '0'
        }
    })
}

export const contacts = (theme) => {
    return ({
        gridColumn: "1",
        gridRow: "1 / 3",
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        mx: 'auto',
        mt: '5%',
        [theme.breakpoints.down('mobile')]: {
            width: '95%',
            gridColumn: "1 / 3",
            gridRow: "1",
        }
    })
}

export const cartItems = (theme) => {
    return ({
        gridColumn: "2",
        gridRow: " 1 / 3",

        paddingTop: '4vh',
        [theme.breakpoints.down('mobile')]: {
            my: '10%',
            gridColumn: "1 / 3",
            gridRow: "2",
        }
    })
}