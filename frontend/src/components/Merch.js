import { React, useState, useEffect } from "react";
import CSCard from "./CSCard";
import ProductPopup from "./ProductPopup";
import CartDrawer from "./CartDrawer";
import Login from "./Login";
import Signup from "./Signup";
import NavSidebar from "./NavSidebar";
import "../styles/Merch.css";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {
  ShoppingBag,
  Dehaze,
  PriceChange,
  Description,
} from "@mui/icons-material";

const sortState = Object.freeze({
  NONE: 0,
  PRICE_HIGH: 1,
  PRICE_LOW: 2,
});

const testProduct = {
  images: [
    "./global/model.png",
    "./global/model2.jpg",
    "./global/model3.jpg",
    "./global/model4.jpg",
  ],
  name: "CSHub: Hacker’s Black Shirt",
  price: 25.0,
  description: "The best Black shirt from CSHub",
};

export default function Merch() {
  const [cart, setCart] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [shopJSON, setShopJSON] = useState(false);
  const [product, setProduct] = useState(testProduct);
  const [userActive, setUserActive] = useState();

  const setStates = (index) => {
    setOpenPopup(!openPopup);
    setUserActive(shopJSON[index]);
  }

  useEffect( () => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.json())
    .then(json=> {
      console.log(json);
      setShopJSON(json)
    })
  }, [])

  useEffect( () => {
    setUserActive(shopJSON[0])
  }, [shopJSON])

  
  return (
    <>
      {!(shopJSON) && <div>Loading...</div>}

      {(shopJSON) &&
        <>
          <AppBar
            position="relative"
            color="background"
            sx={{
              boxShadow: "none",
              align: "center",
              justifyItems: "center",
            }}
          >
            <Toolbar sx={{position: 'absolute', top: '35%', left: '4vw'}}>
              <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
                <>
                  {/* COMPONENT FOR LEFT DRAWER */}
                  <NavSidebar trigger={openLogin} passFunction={setOpenLogin}/>
                  {/* COMPONENT FOR RIGHT DRAWER */}
                  <CartDrawer cart={cart} setCart={setCart}/>
                </>
              </Stack>
              </Toolbar>

              <Box sx={{width: '50%', margin: '0 auto'}}>
                  <Box
                  component="img"
                  src="./global/CSHub_Dark.png"
                  className="cshub-logo-container"
                  sx={{ height: 200}}
                ></Box>
              </Box>
              
              {/* <Stack direction="row" spacing={2} justifyContent="flex-end" alignItems="center">
                <>
                  <IconButton
                    className="navMenu"
                    size="large"
                    edge="start"
                    sx={{ color: "text.primary" }}
                    >
                    <PersonIcon fontSize="large"></PersonIcon>
                  </IconButton>

                  <IconButton
                    className="navMenu"
                    size="large"
                    edge="start"
                    sx={{ color: "text.primary" }}
                    >
                    <PersonAddAlt1Icon fontSize="large"></PersonAddAlt1Icon>
                  </IconButton>
                </>
              </Stack> */}
          </AppBar>
          <div className="merch-header">
            <div>
              <span className="var-color">var </span> store = "
              <span className="ms-color">MerchStore</span>";
            </div>
          </div>

          <div className="merch-billboard-container">
            <div className="opacity"></div>
            <img src="./global/stock.jpg"></img>

            <div className="merch-textboard">
              <div className="merch-textboard-header">
                50% off of select merch items
              </div>
              <div className="merch-textboard-subheader">
                Sale ends March 30th, 2023
              </div>
            </div>
          </div>

          <Box sx={{ display: "flex", justifyContent: "center", mb: "4vh" }}>
            <Button>
              <Typography variant="h6" color="text.primary">
                Price
              </Typography>
            </Button>
          </Box>
          <Stack direction='row'>
            
          </Stack>

          <div className="merch-container">
            {(() => {
              let list = [];
              if (shopJSON ) {
                for (let i = 0; i < 8; i++) {
                  list.push(
                    <div className="merch-card">
                      <CSCard 
                        key={i}
                        productState={ setProduct}
                        onClick={() => setStates(i)} 
                        data={shopJSON[i]} 
                        />
                    </div>
                  );
                }
              }
              return list;
            })()}
          </div>

          <ProductPopup
            product={ userActive }
            trigger={openPopup}
            onClick={() => setOpenPopup(!openPopup)}
            sx={{ width: "100%" }}
            cart={cart}
            setCart={setCart}
          >
          </ProductPopup>

          <Login trigger={openLogin} onClick={() => setOpenLogin(!openLogin)}></Login>
          </>
        }
    </>
  );
}
