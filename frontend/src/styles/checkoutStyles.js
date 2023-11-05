export const bodyGrid = (theme) => {
    return ({
        width: '100%',
        height: 'auto',
        display: 'grid',
        alignItems: 'start',

        backgroundColor: 'black',
        boxShadow: "10px",
        borderRadius: '8px',

        pb: '5vh',
        [theme.breakpoints.up('mobile')]: {
            width: '90vw',
            minHeight: '90vh',
            mx: 'auto',
            my: '5vh'
        },
        [theme.breakpoints.down('mobile')]: {
            m: '0px',
            width: '100%',
            minHeight: '100vh',
            borderRadius: '0'
        }
    })
}

export const container = (theme) => {
    return ({
        
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
        },
        [theme.breakpoints.up('mobile')]: {
            position: 'sticky',
            alignSelf: 'start',
            top: '10%',
            // top: 0,
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