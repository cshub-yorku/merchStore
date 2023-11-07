import {
  Dialog,
  DialogContent,
  IconButton,
  List,
  ListItem,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Popover,
  ButtonGroup,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import {
  button_black,
  toggle_button_black,
  PopoverStyle,
} from "../styles/Styles";
import {
  helperNotation,
  PopoverText,
  productBuy,
  productBuyButton,
  productMainImage,
  ProductPopover,
  productPriceBox,
  productPriceText,
  productSubImage,
  SizeButtonGroup,
  subImages,
  ToggleButtonSeparations,
  productStyle,
  gridContainer,
  imageGridContainer,
  headerGridContainer,
  bodyGridContainer,
  closeButton,
} from "../styles/ProductPopupStyles";
import {
  bold,
  fontJura,
  medium,
  semiBold,
  themeColor,
} from "../styles/fontStyles";
import { useNavigate } from "react-router";
import { useStoreContext } from "../controllers/StoreContext";
import CartQuantityButton from "./CartQuantityButton";
import { cart_controls_box } from "../styles/CartDrawer";

export default function ProductPopup({ trigger, onClick, product }) {
  const theme = useTheme();
  const mainPic = 0;
  const navigate = useNavigate();

  const menuPaperStyles = {
    // Change the background color for the dropdown list
    background: "#282A4E", // Change to your desired color
  };

  const [pic, setPic] = useState(mainPic);
  const [shippingPopover, setShippingPopover] = useState(null);
  const shippingOpen = Boolean(shippingPopover);

  const [sizePopover, setSizePopover] = useState(null);
  const sizeOpen = Boolean(sizePopover);
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const handleSize = (event, newSize) => {
    setSize(newSize);
  };

  const bSmallScreen = useMediaQuery(theme.breakpoints.down("mobile"));

  const cart = useStoreContext();

  return product ? (
    <Dialog
      open={trigger}
      onClose={onClick}
      fullScreen={true}
      PaperProps={{
        sx: productStyle(theme),
      }}
      className="backdrop-blur-sm"
    >
      <DialogContent>
        <div className="grid relative md:p-4 grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Image Container */}
          <div className="space-y-2">
            {/* For mobile only, the price and the name on top */}
            <div className="pb-2 lg:hidden">
              <Typography variant="h4" sx={[bold, fontJura]}>
                Product Name
              </Typography>
              <h4 className="text-zinc-400 text-xl sm:text-2xl">$100</h4>
            </div>

            {/* Main image */}
            <Box
              component="img"
              src={product.images[pic]}
              // sx={productMainImage(theme)}
              className="object-cover"
            ></Box>

            {/* Extra images */}
            <div className="flex gap-2 w-full">
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  onMouseEnter={() => {
                    setPic(index);
                  }}
                  onMouseLeave={() => {
                    setPic(mainPic);
                  }}
                  component="img"
                  src={product.images[index]}
                  className={`w-16 md:w-20 xl:w-24 border-2 border-purple-600 transition ${
                    pic === index ? "border-white" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          {/* <Box sx={headerGridContainer(theme)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <Typography variant="h3" sx={[medium, fontJura, { my: "2%" }]}>
                {product.name}
                Product Name
              </Typography>
              <IconButton sx={[themeColor, closeButton]} onClick={onClick}>
                <CloseIcon sx={{ color: "#000" }}></CloseIcon>
              </IconButton>
            </Box>
            {bSmallScreen && (
              <Typography
                variant="h6"
                sx={{ color: "#fff", textAlign: "center" }}
              >
                $66
              </Typography>
            )}
          </Box> */}
          <div className="space-y-4 pb-8">
            <Typography
              className="max-lg:hidden"
              variant="h4"
              sx={[bold, fontJura]}
            >
              Product Name
            </Typography>

            <p className="text-zinc-300 text-lg tracking-wider">
              {product.description}
            </p>

            <h4 className="max-lg:hidden tracking-wide text-zinc-200 font-bold text-xl sm:text-2xl">
              CA$100
            </h4>
            <hr className="border-zinc-700" />

            <div className="">
              <ToggleButtonGroup
                value={size}
                exclusive
                onChange={handleSize}
                aria-label="size"
                sx={SizeButtonGroup(theme)}
              >
                <ToggleButton
                  value="S"
                  aria-label="small"
                  sx={toggle_button_black}
                >
                  <Typography variant="body">S</Typography>
                </ToggleButton>
                <ToggleButton
                  value="M"
                  aria-label="medium"
                  sx={[toggle_button_black, ToggleButtonSeparations]}
                >
                  <Typography variant="body">M</Typography>
                </ToggleButton>
                <ToggleButton
                  value="L"
                  aria-label="large"
                  sx={toggle_button_black}
                >
                  <Typography variant="body">L</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
              <Typography variant="body1" sx={helperNotation}>
                ⓘ Size Guide
              </Typography>
            </div>

            <CartQuantityButton quantity={quantity} setQuantity={setQuantity} />
            <Box sx={productBuy(theme)}>
              {!bSmallScreen && <Box sx={productPriceBox}>
                <Typography variant="h5" sx={[bold, fontJura, productPriceText]}>
                  {product.price}$
                </Typography>
              </Box>}
              <ButtonGroup sx={productBuyButton}>
                <Button
                  onClick={() => {
                    cart.changeItemAmount(product, quantity);
                  }}
                  variant="outlined"
                  sx={[button_black, productBuyButton]}
                >
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Add To Cart
                  </Typography>
                </Button>
                {/* {!bSmallScreen && <Button
                  onClick={() => { cart.changeItemAmount(product, quantity) }}
                  variant="outlined"
                  sx={[button_black, productBuyButton]}
                >
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Add To Cart
                  </Typography>
                </Button>} */}
                <Button
                  sx={[button_black, productBuyButton]}
                  onClick={() => {
                    navigate("/product");
                  }}
                >
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Buy Now
                  </Typography>
                </Button>
              </ButtonGroup>
            </Box>

            <Typography
              variant="body1"
              sx={helperNotation}
              aria-owns={shippingOpen ? "shippingP" : undefined}
              aria-haspopup="true"
              onMouseEnter={(event) => {
                setShippingPopover(event.currentTarget);
              }}
              onMouseLeave={() => {
                setShippingPopover(null);
              }}
            >
              ⓘ Shipping Details
            </Typography>
            <hr className="border-zinc-700" />
            <Box>
              <p className="font-semibold text-zinc-50">Product Details:</p>

              <ul className="text-zinc-300 space-y-2 pt-2">
                <li className="list-disc ml-6 pl-2">
                  Adult Heavyweight Hoodie
                </li>
                <li className="list-disc ml-6 pl-2">
                  70% Cotton, 30% Polyester
                </li>
                <li className="list-disc ml-6 pl-2">
                  Washing Instructions: Wash 30C. Wash inside out like with
                  colors. DO NOT BLEACH. Tumble dry low, DO NOT IRON.
                </li>
              </ul>
            </Box>
            <Popover
              id="shippingP"
              sx={[PopoverStyle, ProductPopover]}
              open={shippingOpen}
              anchorEl={shippingPopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={() => {
                setShippingPopover(null);
              }}
              disableRestoreFocus
            >
              <Typography variant="body1" sx={PopoverText}>
                Ships within 2-3 business days, available only in Greater
                Toronto Area.
              </Typography>
            </Popover>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ) : null;
}
