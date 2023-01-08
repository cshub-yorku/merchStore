import React from "react";
import Nav from "./Nav";
import Merch from "./Merch";
import Footer from "./Footer";
import Home from "./Home";
import Checkout from "./Checkout";
import { dark_Theme, light_Theme } from "./themes";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={dark_Theme}>
      <div className="App">
        {/* <Nav /> */}

        <Routes>
          <Route path="/" element={<Merch />} />
          <Route path="/csshop" element={<Merch />} />
          <Route path="/product" element={<Checkout />} />
        </Routes>

        <div className='footer-section'>
          <Footer />
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
