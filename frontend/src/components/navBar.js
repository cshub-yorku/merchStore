import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import NavSidebar from "./NavSidebar";
import CartDrawer from "./CartDrawer";
import { Box } from "@mui/system";
import { bold, fontIBM } from "../styles/fontStyles";
import {
  cartStyle,
  dehazeStyle,
  logo,
  MerchAppBar,
  StackStyle,
  centerItem,
  merchColor,
  varColor,
  cartNotification,
  title,
  accountStyle,
  cartNotificationText,
} from "../styles/navBarStyles";
import { AccountCircle, Dehaze, ShoppingBag } from "@mui/icons-material";
import { keyframes, useTheme } from "@emotion/react";
import { useStoreContext } from "../controllers/StoreContext";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const theme = useTheme();
  const cartContext = useStoreContext();
  const navigate = useNavigate();

  //for some reason if i put this animation in styles file whole app breaks :(
  //hopelfully will fix it later
  const notifAnim = keyframes`
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(2);
        }
        100% {
            transform: scale(1);
        }
    `;
  const animation = {
    animation: `${notifAnim} 0.5s ease-in-out both`,
  };

  const noAnimation = {
    animation: ``,
  };

  const [anim, setAnim] = useState(noAnimation);

  useEffect(() => {
    setAnim(animation);
  }, [cartContext.cart.size]);

  const animationEnd = () => {
    setAnim(noAnimation);
  };

  const [openLogin, setOpenLogin] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);

  const [offset, setOffset] = useState(0);

  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  const handleProfileClick = () => {
    navigate("/admin");
  };

  const handleLoginClick = () => {
    setOpenLogin(true);
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar sx={MerchAppBar(theme)}>
        <Toolbar>
          <Box sx={StackStyle}>
            <>
              {/* COMPONENT FOR LEFT DRAWER */}
              <IconButton
                size="large"
                edge="start"
                sx={dehazeStyle}
                onClick={() => setOpenNav(true)}
              >
                <Dehaze sx={{ fontSize: 40 }}></Dehaze>
              </IconButton>

              {isLoggedIn() ? (
                <IconButton
                  size="large"
                  edge="start"
                  sx={accountStyle}
                  onClick={handleProfileClick}
                >
                  <AccountCircle sx={{ fontSize: 40 }}></AccountCircle>
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  edge="start"
                  sx={accountStyle}
                  onClick={handleLoginClick}
                >
                  <AccountCircle sx={{ fontSize: 40 }}></AccountCircle>
                </IconButton>
              )}

              <NavSidebar
                trigger={openNav}
                passFunction={setOpenNav}
                login={setOpenLogin}
              />
              <Box sx={[centerItem]}>
                <Box
                  component="img"
                  src="./global/logo.svg"
                  sx={logo(offset)}
                ></Box>
                <Slide direction="down" in={!offset} mountOnEnter unmountOnExit>
                  <Typography
                    variant="h6"
                    display="inline"
                    sx={[bold, fontIBM, title]}
                  >
                    <Typography
                      variant="h6"
                      display="inline"
                      sx={[bold, fontIBM, varColor]}
                    >
                      var{" "}
                    </Typography>{" "}
                    store = "
                    <Typography
                      variant="h6"
                      display="inline"
                      sx={[bold, fontIBM, merchColor]}
                    >
                      MerchStore
                    </Typography>
                    ";
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
                <Box
                  sx={[cartNotification, anim]}
                  onAnimationEnd={animationEnd}
                >
                  <Typography variant="subtitle1" sx={cartNotificationText}>
                    {cartContext.cart.size}
                  </Typography>
                </Box>
                <ShoppingBag sx={{ fontSize: 40 }}></ShoppingBag>
              </IconButton>

              <CartDrawer
                cart={cart}
                setCart={setCart}
                trigger={openCart}
                passFunction={setOpenCart}
              />
            </>
          </Box>
        </Toolbar>
      </AppBar>
      <Login
        trigger={openLogin}
        onClick={() => {
          setOpenLogin(!openLogin);
          console.log("ji log");
        }}
      ></Login>
    </>
  );
}
