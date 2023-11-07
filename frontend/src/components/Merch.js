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
import Loader from "./Loader";

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

  const [openPopup, setOpenPopup] = useState(false);
  const [product, setProduct] = useState(testProduct);
  const [userActive, setUserActive] = useState();

  const [productNotification, setProductNotification] = useState(false);

  const setStates = (index) => {
    setOpenPopup(!openPopup);
    setUserActive(merch.getAllProducts()[index]);
  };

  useEffect(() => {
    merch.updateProducts();
  }, []);

  return (
    <Box className="mt-20">
      <NavBar />
      {!merch.getAllProducts() && <Loader />}

      {merch.getAllProducts() && (
        <Box>
          {/* Hero section */}
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
              <Typography variant="h5" className="text-zinc-200">
                Sale ends March 30th, 2023
              </Typography>
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

          {/* Products */}
          <div className="pt-12 px-4">
            <div className="max-w-[1680px] mx-auto space-y-2">
              <p className="text-3xl md:text-4xl font-semibold">Our Products</p>
              <hr className="border-[#793CEE] w-32 border-b-8" />
            </div>
            {merch.getAllProducts() ? (
              <div
                style={{ breakInside: "avoid" }}
                className="grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 pt-8 w-full mx-auto gap-4 md:gap-8 max-w-[1680px]"
              >
                {merch.getAllProducts().map((item, index) => {
                  return (
                    <CSCard
                      key={index}
                      productState={setProduct}
                      onClick={() => setStates(index)}
                      data={item}
                    />
                  );
                })}
              </div>
            ) : (
              <Loader />
            )}
          </div>

          <ProductPopup
            product={userActive}
            trigger={openPopup}
            onClick={() => setOpenPopup(!openPopup)}
            sx={{ width: "100%" }}
          ></ProductPopup>
        </Box>
      )}
    </Box>
  );
}
