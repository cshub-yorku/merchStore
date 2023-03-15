
export const logo = (offset) => {
    let rate = 200 - offset/2;
    let picSize =  rate > 100 ? rate : 100 ;
    
    return {
        width: picSize,
        m: 'auto',
    }
}

export const MerchAppBar = (theme) => {
    return {
        bgcolor: theme.palette.background,
        boxShadow: "none",
        align: "center",
        justifyItems: "center",
    }
}

export const NavSidebar = {
    ml: '5',
    mr: 'auto'
}