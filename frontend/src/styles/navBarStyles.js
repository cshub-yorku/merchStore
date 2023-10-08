

//animation is in page file


export const logo = (offset) => {
    let rate = 120 - offset / 2;
    let picSize = rate > 80 ? rate : 80;

    return {
        width: picSize,
        m: 'auto',
        my: "0.5vw",
    }
}

export const MerchAppBar = (theme) => {
    return {
        bgcolor: theme.palette.background.default,
        boxShadow: "none",
        align: "center",
        justifyItems: "center",
    }
}

export const dehazeStyle = {
    color: "text.primary",
    my: 'auto',
    ml: '1%',
}

export const accountStyle = {
    color: "text.primary",
    m: 'auto',
    ml: '1%',
}

export const cartStyle = {
    color: "text.primary",
    my: 'auto',
    mr: '1%',
    position: 'relative',
}

export const StackStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
}

export const varColor = {
    color: "#ed6d11"
}
export const merchColor = {
    color: "#624f82"
}

export const centerItem = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    m: 'auto',
}

export const cartNotification = {
    position: 'absolute',
    top: "20%",
    right: "10%",
    width: '30%',
    height: '30%',
    bgcolor: 'red',
    borderRadius: '50%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

    // animation: `${notifAnim} 0.5s ease-in-out infinite both`,
}

export const title = {
    mb: '3%',
}

export const cartNotificationText = {
}

