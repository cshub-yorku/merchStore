

//animation is in page file


export const logo = (offset) => {
    let rate = 111 - offset / 2;
    let picSize = rate > 70 ? rate : 70;

    return {
        width: picSize,
        mx: 'auto',
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
}

export const accountStyle = {
    color: "text.primary",
}

export const cartStyle = {
    color: "text.primary",
}

export const StackStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
}

export const varColor = {
    color: "#ed6d11",
    fontSize: "2rem"
}
export const merchColor = {
    color: "#624f82",
    fontSize: "2rem"
}

export const centerItem = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    mx: '1',
    marginLeft: "-25px",
    marginTop: "5px",
   
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
    mb: '3%', fontSize: "2rem"
}

export const cartNotificationText = {
}

