import React, { useEffect, useState } from "react"
import { AppBar, Slide, Toolbar, Typography } from "@mui/material"
import NavSidebar from "./NavSidebar"
import CartDrawer from "./CartDrawer"
import { Box, Stack } from "@mui/system"
import { useTheme } from "@emotion/react"
import { centerItem, merchColor, StackStyle, varColor } from "../styles/MerchStyle"
import { bold, fontIBM } from "../styles/fontStyles"
import { logo, MerchAppBar } from "../styles/navBarStyles"

export default function NavBar() {

    const theme = useTheme();

    const [openLogin, setOpenLogin] = useState(false);
    const [cart, setCart] = useState([]);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset);

    return (
        < AppBar
            sx={MerchAppBar(theme)}
        >
            <Toolbar >
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={StackStyle}>
                    <>
                        {/* COMPONENT FOR LEFT DRAWER */}
                        <NavSidebar trigger={openLogin} passFunction={setOpenLogin} sx={NavSidebar} />
                        <Box sx={[centerItem]}>
                            <Box
                                component="img"
                                src="./global/CSHub_Dark.png"
                                sx={logo(offset)}
                            ></Box>
                            <Slide direction="down" in={!offset} mountOnEnter unmountOnExit>
                                <Typography variant="h4" display="inline" sx={[bold, fontIBM]}>
                                    <Typography variant="h4" display="inline" sx={[bold, fontIBM, varColor]}>var </Typography> store = "
                                    <Typography variant="h4" display="inline" sx={[bold, fontIBM, merchColor]}>MerchStore</Typography>";
                                </Typography>
                            </Slide>
                        </Box>
                        {/* COMPONENT FOR RIGHT DRAWER */}
                        <CartDrawer cart={cart} setCart={setCart} />
                    </>
                </Stack>
            </Toolbar>
        </AppBar >
    )
}