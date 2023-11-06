import { React, useState, useEffect } from "react";
import CSCard from "./CSCard";
import ProductPopup from "./ProductPopup";
import { useTheme } from "@emotion/react";
import NavBar from "./navBar";
import ProductNotification from "./ProductNotification";
import { field_white } from "../styles/Styles";
import { useStoreContext } from "../controllers/StoreContext";
import CartDrawer from "./CartDrawer";
import Login from "./Login";
import Signup from "./Signup";
import NavSidebar from "./NavSidebar";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import {
  ShoppingBag,
  Dehaze,
  PriceChange,
  Description,
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { bold, fontIBM } from "../styles/fontStyles";
import {
  centerItem,
  MerchAppBar,
  merchBillboardContainer,
  merchBillboardImage,
  merchColor,
  merchTextboard,
  MerchToolbar,
  varColor,
} from "../styles/MerchStyle";
import { useLocation, useNavigate } from "react-router";

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
  const merch = useStoreContext();
  const navigate = useNavigate();
  const location = useLocation()

  //true fromm the beginning just to make navigate work 
  const [openPopup, setOpenPopup] = useState(true);
  const [product, setProduct] = useState(testProduct);
  const [userActive, setUserActive] = useState();

  const [productNotification, setProductNotification] = useState(false);

  const setStates = (index) => {
    navigate(location.pathname, { state: { modal: true } })
    setUserActive(merch.getAllProducts()[index]);
  };

  const closeModal = () => {
    navigate(-1);
  }

  useEffect(() => {
    console.log('Location ' + location.state.modal);
    console.log('popup ' + openPopup);
    if (location.state || location.state.modal) setOpenPopup(!openPopup);
  }, [location])

  useEffect(() => {
    merch.updateProudcts();
  }, [])

  return (

    <>
      <NavBar></NavBar>

      <Box sx={merchBillboardContainer}>
        <Box
          component="img"
          src="./global/stock.jpg"
          sx={merchBillboardImage}
        ></Box>

        <Box sx={merchTextboard}>
          <Typography variant="h3" sx={bold}>
            50% off of select merch items
          </Typography>
          <Typography variant="h4">Sale ends March 30th, 2023</Typography>
        </Box>
      </Box>

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

      <Box display="flex" justifyContent="center">
        {merch.getAllProducts() ? (
          <Grid
            container
            rowSpacing={1}
            spacing={0}
            justifyContent="center"
            sx={{ width: "90%" }}
          >
            {merch.getAllProducts().map((item, index) => {
              return (
                <Grid
                  key={index}
                  uhd={4}
                  fhd={4}
                  tablet={6}
                  mobile={12}
                  display="flex"
                  justifyContent="center"
                >
                  <CSCard
                    key={index}
                    productState={setProduct}
                    onClick={() => setStates(index)}
                    data={item}
                  />
                </Grid>
              )
            })}
          </Grid>
        ) :
          <Box sx={{display: 'flex', mb: '4%', mt: '2%'}}>
            <CircularProgress />
            <Typography variant="h5" sx={[bold, {ml: '2rem'}]}>Loading</Typography>
            {/* <Box sx={{ml: '10%'}}></Box>   */}
          </Box>
        }


      </Box>

      <ProductPopup
        product={userActive}
        trigger={openPopup}
        onClick={closeModal}
        sx={{ width: "100%" }}
      ></ProductPopup>
    </>
  );
}
