import React, { useEffect, useState } from "react"
import { AppBar, IconButton, Slide, Toolbar, Typography } from "@mui/material"
import NavSidebar from "./NavSidebar"
import CartDrawer from "./CartDrawer"
import { Box, Stack } from "@mui/system"
import { bold, fontIBM } from "../styles/fontStyles"
import { cartStyle, dehazeStyle, logo, MerchAppBar, StackStyle, centerItem, merchColor, varColor, cartNotification, title, accountStyle } from "../styles/navBarStyles"
import { AccountCircle, Dehaze, ShoppingBag } from "@mui/icons-material"
import { useTheme } from "@emotion/react"

export default function NavBar() {

    const theme = useTheme();

    const [openLogin, setOpenLogin] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [cart, setCart] = useState([]);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        < AppBar
            sx={MerchAppBar(theme)}
        >
            <Toolbar >
                <Box sx={StackStyle}>
                    <>
                        {/* COMPONENT FOR LEFT DRAWER */}
                        <IconButton
                            size="large"
                            edge="start"
                            sx={dehazeStyle}
                            onClick={() => setOpenLogin(true)}
                        >
                            <Dehaze sx={{ fontSize: 40 }}></Dehaze>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="start"
                            sx={accountStyle}
                            onClick={() => setOpenLogin(true)}
                        >
                            <AccountCircle sx={{ fontSize: 40 }}></AccountCircle>
                        </IconButton>

                        <NavSidebar trigger={openLogin} passFunction={setOpenLogin}/>
                        <Box sx={[centerItem]}>
                            <Box
                                component="img"
                                src="./global/logo.svg"
                                sx={logo(offset)}
                            ></Box>
                            <Slide direction="down" in={!offset} mountOnEnter unmountOnExit>
                                <Typography variant="h4" display="inline" sx={[bold, fontIBM, title]}>
                                    <Typography variant="h4" display="inline" sx={[bold, fontIBM, varColor]}>var </Typography> store = "
                                    <Typography variant="h4" display="inline" sx={[bold, fontIBM, merchColor]}>MerchStore</Typography>";
                                </Typography>
                            </Slide>
                        </Box>

                        {/* COMPONENT FOR RIGHT DRAWER */}
                        <IconButton
                            size="large"
                            edge="start"
                            sx={cartStyle}
                            onClick={() => setOpenCart(true)}
                        >
                            <Box sx={cartNotification}>
                                <Typography variant="subtitle1">1</Typography>
                            </Box>
                            <ShoppingBag sx={{ fontSize: 40 }}></ShoppingBag>
                        </IconButton>

                        <CartDrawer cart={cart} setCart={setCart} trigger={openCart} passFunction={setOpenCart}/>
                    </>
                </Box>
            </Toolbar>
        </AppBar >
    )
}