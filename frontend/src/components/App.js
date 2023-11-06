import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";

import { dark_Theme, light_Theme } from "./themes";
import Merch from "./Merch";
import Footer from "./Footer";
import Checkout from "./Checkout";
import CartDrawer from "./CartDrawer";

import { StoreContextProvider } from "../controllers/StoreContext";

import {
  appBoxStyle,
  contentBoxStyle,
  footerBoxStyle,
} from "../styles/AppStyles";
import RequireAuth from "./RequireAuth";
import UserProfileSection from "./UserProfileSection";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw "Missing Publishable Key";
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <ThemeProvider theme={dark_Theme}>
        <CssBaseline />
        <StoreContextProvider>
          <Box sx={appBoxStyle}>
            <Box sx={contentBoxStyle}>
              <Routes>
                <Route path="/" element={<Merch />} />
                <Route path="/csshop" element={<Merch />} />
                <Route
                  path="/checkout"
                  element={
                    <RequireAuth>
                      <Checkout />
                    </RequireAuth>
                  }
                />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/user" element={<UserProfileSection />} />
                <Route path="/" element={<CartDrawer />} />
              </Routes>
            </Box>
            <Box component="footer" sx={footerBoxStyle}>
              <Footer />
            </Box>
          </Box>
        </StoreContextProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default App;
