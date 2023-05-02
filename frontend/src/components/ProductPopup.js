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
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useState } from "react";
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
  closeButton
} from "../styles/ProductPopupStyles";
import { bold, fontJura, medium, themeColor } from "../styles/fontStyles";
import { useNavigate } from "react-router";
import { useStoreContext } from "../controllers/StoreContext";
import CartQuantityButton from "./CartQuantityButton";

export default function ProductPopup({
  trigger,
  onClick,
  product,
}) {
  const theme = useTheme();
  const mainPic = 0;
  const navigate = useNavigate();

  const [pic, setPic] = useState(mainPic);
  const [shippingPopover, setShippingPopover] = useState(null);
  const shippingOpen = Boolean(shippingPopover);

  const [sizePopover, setSizePopover] = useState(null);
  const sizeOpen = Boolean(sizePopover);
  const [size, setSize] = useState();
  const handleSize = (event, newSize) => {
    setSize(newSize);
  };

  const cart = useStoreContext();


  return product ? (
    <Dialog
      open={trigger}
      onClose={onClick}
      fullScreen={true}
      PaperProps={{
        sx: productStyle(theme)
      }}
    >
      <DialogContent
        classes={{ root: { m: 0, p: 0 } }}
        sx={{ "&.MuiDialogContent-root": { m: 0, p: 0 }, bgcolor: theme.palette.primary.main }}
      >
        <Box sx={ gridContainer(theme) }>
          <Box sx={ imageGridContainer(theme) }>
            <Box
              component="img"
              src={product.images[pic]}
              sx={productMainImage(theme)}
            ></Box>
            <Stack
              sx={subImages}
              direction="row"
              justifyContent="center"
            >
              <Box
                onMouseEnter={() => {
                  setPic(1);
                }}
                onMouseLeave={() => {
                  setPic(mainPic);
                }}
                component="img"
                src={product.images[1]}
                sx={productSubImage}
              ></Box>
              <Box
                onMouseEnter={() => {
                  setPic(2);
                }}
                onMouseLeave={() => {
                  setPic(mainPic);
                }}
                component="img"
                src={product.images[2]}
                sx={productSubImage}
              ></Box>
              <Box
                onMouseEnter={() => {
                  setPic(3);
                }}
                onMouseLeave={() => {
                  setPic(mainPic);
                }}
                component="img"
                src={product.images[3]}
                sx={productSubImage}
              ></Box>
            </Stack>
          </Box>
          <Box sx={ headerGridContainer(theme) }>
            <Box sx={{ display: 'flex', flexDirection: "row", alignContent: 'center', height: '100%' }}>
              <Typography variant="h3" sx={[medium, fontJura, {my: '2%'}]}>{product.name}</Typography>
              <IconButton sx={[themeColor, closeButton]} onClick={onClick}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </Box>
          </Box>
          <Box sx={ bodyGridContainer(theme) }>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body1" sx={bold}>
              Product Details:
            </Typography>

            <List>
              <List sx={{ listStyleType: 'disc', pl: 4, py: 0 }}>
                <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>Adult Heavyweight Hoodie</ListItem>
                <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>70% Cotton, 30% Polyester</ListItem>
                <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                  Washing Instructions: Wash 30C. Wash inside out like with
                  colors. DO NOT BLEACH. Tumble dry low, DO NOT IRON.
                </ListItem>
              </List>
            </List>

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
                <Typography variant="h6">S</Typography>
              </ToggleButton>
              <ToggleButton
                value="M"
                aria-label="medium"
                sx={[toggle_button_black, ToggleButtonSeparations]}
              >
                <Typography variant="h6">M</Typography>
              </ToggleButton>
              <ToggleButton
                value="L"
                aria-label="large"
                sx={toggle_button_black}
              >
                <Typography variant="h6">L</Typography>
              </ToggleButton>
            </ToggleButtonGroup>

            <Typography variant="body1" sx={helperNotation}>
              ⓘ Size Guide
            </Typography>
            

            <CartQuantityButton
            // quantity = {quantity}
            // setDecrease = {setDecrease}
            // setIncrease = {setIncrease}
            />


            <Box sx={productBuy(theme)}>
              <Box sx={productPriceBox}>
                <Typography variant="h5" sx={[bold, fontJura, productPriceText]}>
                  {product.price}$
                </Typography>
              </Box>
              <ButtonGroup sx={productBuyButton}>
                <Button
                  onClick={() => { cart.addItem(product) }}
                  variant="outlined"
                  sx={[button_black, productBuyButton]}
                >
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Add To Cart
                  </Typography>
                </Button>
                <Button sx={[button_black, productBuyButton]} onClick={() => { navigate("/product"); console.log("Hi"); }}>
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Buy Now
                  </Typography>
                </Button>
              </ButtonGroup>
            </Box>

            <Typography
              variant="body1"
              sx={helperNotation}
              aria-owns={shippingOpen ? 'shippingP' : undefined}
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
            <Popover
              id="shippingP"
              sx={[PopoverStyle, ProductPopover]}
              open={shippingOpen}
              anchorEl={shippingPopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
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
          </Box>
        </Box>
      </DialogContent>
    </Dialog >
  ) : (
    ""
  );
}