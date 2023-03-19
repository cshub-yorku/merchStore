import { React, useState, useEffect } from "react";
import CSCard from "./CSCard";
import ProductPopup from "./ProductPopup";
import { Button, Grid, Snackbar, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { bold } from "../styles/fontStyles";
import { merchBillboardContainer, merchBillboardImage, merchTextboard } from "../styles/MerchStyle";
import { useTheme } from "@emotion/react";
import NavBar from "./navBar";
import ProductNotification  from "./ProductNotification";
import { field_white} from "../styles/Styles";

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
  title: "CSHub: Hacker’s Black Shirt",
  price: 25.0,
  description: "The best Black shirt from CSHub",
};

export default function Merch() {
  const theme = useTheme();

  const [openPopup, setOpenPopup] = useState(false);
  const [shopJSON, setShopJSON] = useState(false);
  const [product, setProduct] = useState(testProduct);
  const [userActive, setUserActive] = useState();

  const [productNotification, setProductNotification] = useState(false);

  const setStates = (index) => {
    setOpenPopup(!openPopup);
    setUserActive(shopJSON[index]);
  }

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        setShopJSON(json)
      })
  }, [])

  useEffect(() => {
    setUserActive(shopJSON[0])
  }, [shopJSON])

  return (
    <Box sx={{ marginBottom: '8%' }}>

      {!(shopJSON) && <div>Loading...</div>}

      {(shopJSON) &&
        <>
          <NavBar></NavBar>
          

          <Box sx={merchBillboardContainer}>
            <Box
              component="img"
              src="./global/stock.jpg"
              sx={merchBillboardImage}
            ></Box>

            <Box sx={merchTextboard}>
              <Typography variant="h3" sx={bold}>50% off of select merch items</Typography>
              <Typography variant="h4">Sale ends March 30th, 2023</Typography>
            </Box>
          </Box>

          <Button onClick={() => { setProductNotification(true) }}>Hi</Button>
          <ProductNotification open={productNotification} setOpen={setProductNotification} product={testProduct}></ProductNotification>

          {/* <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Typography>Sort</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mb: "4vh" }}>
              <Button>
                <Typography variant="h6" color="text.primary">
                  Price
                </Typography>
              </Button>
              <Button>
                <Typography variant="h6" color="text.primary">
                  Type
                </Typography>
              </Button>
            </Box>
          </Box> */}

          <Box display='flex' justifyContent='center'>
            <Grid container rowSpacing={1} spacing={0} justifyContent='center' sx={{ width: '90%' }}>
              {(() => {
                let list = [];
                if (shopJSON) {
                  for (let i = 0; i < shopJSON.length; i++) {
                    list.push(
                      <Grid uhd={4} fhd={4} tablet={6} mobile={12} display='flex' justifyContent='center'>
                        <CSCard
                          key={i}
                          productState={setProduct}
                          onClick={() => setStates(i)}
                          data={shopJSON[i]}
                        />
                      </Grid>
                    );
                  }
                }
                return list;
              })()}
            </Grid>
          </Box>

          <ProductPopup
            product={userActive}
            trigger={openPopup}
            onClick={() => setOpenPopup(!openPopup)}
            sx={{ width: "100%" }}
          // cart={cart}
          // setCart={setCart}
          >
          </ProductPopup>

          {/* <Login trigger={openLogin} onClick={() => setOpenLogin(!openLogin)}></Login> */}
        </>
      }
    </Box>

  );
}
