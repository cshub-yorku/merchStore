import React, { useEffect, useRef, useState } from "react";
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
  centerItem,
  cartNotification,
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

  const isMobile = window.innerWidth <= 768;
  const [openLogin, setOpenLogin] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [showHeading, setShowHeading] = useState(false);
  const NavbarRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const logoStyle = isMobile ? { width: "45px", height: "auto" } : logo(offset);

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
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`px-4 h-20 transition-all top-0 z-20 bg-[#2D2C42] flex items-center md:px-8 xl:px-12 py-4 border-b border-zinc-700 w-full fixed`}
    >
      <nav className="w-full flex items-center justify-between">
        <IconButton
          size="large"
          edge="start"
          sx={dehazeStyle}
          onClick={() => setOpenNav(true)}
        >
          <Dehaze sx={{ fontSize: 32 }}></Dehaze>
        </IconButton>

        {/* {isLoggedIn() ? (
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
          )} */}

        <Box
          className={`${
            offset < 1 ? "" : "md:translate-x-[50%]"
          } duration-300 transition-all flex gap-4 items-center`}
          sx={[centerItem]}
        >
          {/* Logo */}
          <Box
            component="img"
            src="./global/logo.svg"
            className={`w-12 duration-500 ${
              offset < 1 ? "" : "md:-translate-x-[50%]"
            }`}
          />

          <div
            className={`origin-center max-md:hidden duration-300 transition ${
              offset < 1 ? "opacity-1" : "opacity-0 -translate-x-[50%]"
            }`}
          >
            <Typography variant="h6" sx={[bold, fontIBM]}>
              <span className="text-amber-500">var</span> store = "
              <span className="text-purple-600">MerchStore</span>";
            </Typography>
          </div>

          {/* Text under logo */}
          {/* {!isMobile && (
            <Slide
              direction="down"
              in={!offset}
              mountOnEnter
              unmountOnExit
              className="py-3 pb-0"
            >
              <Typography variant="h6" sx={[bold, fontIBM]}>
                <span className="text-amber-500">var</span> store = "
                <span className="text-purple-600">MerchStore</span>";
              </Typography>
            </Slide>
          )} */}
        </Box>

        <IconButton
          className="h-fit"
          sx={cartStyle}
          onClick={() => setOpenCart(true)}
        >
          <Box sx={[cartNotification, anim]} onAnimationEnd={animationEnd}>
            <Typography variant="subtitle1" sx={cartNotificationText}>
              {cartContext.cart.size}
            </Typography>
          </Box>
          <ShoppingBag sx={{ fontSize: 40 }}></ShoppingBag>
        </IconButton>
      </nav>

      {/* Menu Sidebar */}
      <NavSidebar
        trigger={openNav}
        passFunction={setOpenNav}
        login={setOpenLogin}
      />

      {/* Cart Sidebar */}
      <CartDrawer
        cart={cart}
        setCart={setCart}
        trigger={openCart}
        passFunction={setOpenCart}
      />

      <Login
        trigger={openLogin}
        onClick={() => {
          setOpenLogin(!openLogin);
          console.log("ji log");
        }}
      ></Login>
    </header>
  );

  // return (
  //   <>
  //     <AppBar
  //       ref={NavbarRef}
  //       className="py-4 lg:px-12 border-zinc-700 border-b"
  //       sx={MerchAppBar(theme)}
  //     >
  //       <Toolbar>
  //         <Box className="flex flex-row items-center w-full justify-between">
  //           <>
  //             {/* COMPONENT FOR LEFT DRAWER */}
  //             <div className="flex md:gap-4">
  //               <IconButton
  //                 size="large"
  //                 edge="start"
  //                 sx={dehazeStyle}
  //                 onClick={() => setOpenNav(true)}
  //               >
  //                 <Dehaze sx={{ fontSize: 40 }}></Dehaze>
  //               </IconButton>

  //               {isLoggedIn() ? (
  //                 <IconButton
  //                   size="large"
  //                   edge="start"
  //                   sx={accountStyle}
  //                   onClick={handleProfileClick}
  //                 >
  //                   <AccountCircle sx={{ fontSize: 40 }}></AccountCircle>
  //                 </IconButton>
  //               ) : (
  //                 <IconButton
  //                   size="large"
  //                   edge="start"
  //                   sx={accountStyle}
  //                   onClick={handleLoginClick}
  //                 >
  //                   <AccountCircle sx={{ fontSize: 40 }}></AccountCircle>
  //                 </IconButton>
  //               )}
  //             </div>

  //             <NavSidebar
  //               trigger={openNav}
  //               passFunction={setOpenNav}
  //               login={setOpenLogin}
  //             />
  //             <Box sx={[centerItem]}>
  //               <Box component="img" src="./global/logo.svg" sx={[logoStyle]} />

  //               {!isMobile && (
  //                 <Slide
  //                   direction="down"
  //                   in={!offset}
  //                   mountOnEnter
  //                   unmountOnExit
  //                   className="py-3 pb-0"
  //                 >
  //                   <Typography variant="h6" sx={[bold, fontIBM]}>
  //                     <span className="text-amber-500">var</span> store = "
  //                     <span className="text-purple-600">MerchStore</span>";
  //                   </Typography>
  //                   {/* <Typography
  //                     variant="h6"
  //                     display="inline"
  //                     sx={[bold, fontIBM, title]}
  //                   >
  //                     <Typography
  //                       variant="h6"
  //                       display="inline"
  //                       sx={[bold, fontIBM, varColor]}
  //                     >
  //                       var{" "}
  //                     </Typography>{" "}
  //                     store = "
  //                     <Typography
  //                       variant="h6"
  //                       display="inline"
  //                       sx={[bold, fontIBM, merchColor]}
  //                     >
  //                       MerchStore
  //                     </Typography>
  //                     ";
  //                   </Typography> */}
  //                 </Slide>
  //               )}
  //             </Box>

  //             {/* COMPONENT FOR RIGHT DRAWER */}
  //             <IconButton
  //               className="h-fit"
  //               sx={cartStyle}
  //               onClick={() => setOpenCart(true)}
  //             >
  //               <Box
  //                 sx={[cartNotification, anim]}
  //                 onAnimationEnd={animationEnd}
  //               >
  //                 <Typography variant="subtitle1" sx={cartNotificationText}>
  //                   {cartContext.cart.size}
  //                 </Typography>
  //               </Box>
  //               <ShoppingBag sx={{ fontSize: 40 }}></ShoppingBag>
  //             </IconButton>

  //             <CartDrawer
  //               cart={cart}
  //               setCart={setCart}
  //               trigger={openCart}
  //               passFunction={setOpenCart}
  //             />
  //           </>
  //         </Box>
  //       </Toolbar>
  //     </AppBar>
  //     <Login
  //       trigger={openLogin}
  //       onClick={() => {
  //         setOpenLogin(!openLogin);
  //         console.log("ji log");
  //       }}
  //     ></Login>
  //   </>
  // );
}
