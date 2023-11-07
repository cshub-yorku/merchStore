import React from "react";
import Merch from "./Merch";
import Footer from "./Footer";
import Checkout from "./Checkout";
import AdminPage from "./Admin";
import SignUp from "./Signup";
import ResetPassword from "./ResetPassword";
import { dark_Theme, light_Theme } from "./themes";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, responsiveFontSizes } from "@mui/material";
import CartDrawer from "./CartDrawer";
import { main } from "../styles/mainStyle";
import { StoreContextProvider } from "../controllers/StoreContext";
import NavBar from "./navBar";
import {
  appBoxStyle,
  contentBoxStyle,
  footerBoxStyle,
} from "../styles/AppStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={dark_Theme}>
        <CssBaseline />
        <StoreContextProvider>
          <Box sx={appBoxStyle}>
            <Box sx={contentBoxStyle}>
              <Routes>
                <Route path="/" element={<Merch />} />
                <Route path="/csshop" element={<Merch />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/" element={<CartDrawer />} />
              </Routes>
              {/* <NavBar/> */}
            </Box>
            <Box component="footer" sx={footerBoxStyle}>
              <Footer />
            </Box>
          </Box>
        </StoreContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
