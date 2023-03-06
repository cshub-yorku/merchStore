import React from "react";
import Nav from "./Nav";
import Merch from "./Merch";
import Footer from "./Footer";
import Home from "./Home";
import Checkout from "./Checkout";
import { dark_Theme, theme } from "./themes";
import AdminPage from "./Admin";
import SignUp from "./Signup"
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, responsiveFontSizes } from "@mui/material";

function App() {

  console.log(dark_Theme);

  return (
    <ThemeProvider theme={dark_Theme}>
      <CssBaseline/>
      <div className="App">
        {/* <Nav /> */}

        <Routes>
          <Route path="/" element={<Merch />} />
          <Route path="/csshop" element={<Merch />} />
          <Route path="/product" element={<Checkout />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <div className='footer-section'>
          <Footer />
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
