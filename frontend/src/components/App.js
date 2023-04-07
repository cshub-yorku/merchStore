import React from "react";
import Merch from "./Merch";
import Footer from "./Footer";
import Checkout from "./Checkout";
import AdminPage from "./Admin";
import ResetPassword from "./ResetPassword";
import SignUp from "./Signup";
import { dark_Theme, light_Theme } from "./themes";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, responsiveFontSizes } from "@mui/material";
import CartDrawer from "./CartDrawer";
import { main } from "../styles/mainStyle";
import { StoreContextProvider } from "../controllers/StoreContext";

function App() {
  console.log(dark_Theme);

  return (
    <ThemeProvider theme={dark_Theme}>
      <CssBaseline />
      <div className="App">
        {/* <Nav /> */}

        <Routes>
          <Route path="/" element={<Merch />} />
          <Route path="/csshop" element={<Merch />} />
          <Route path="/product" element={<Checkout />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={<CartDrawer />} />
        </Routes>

        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
