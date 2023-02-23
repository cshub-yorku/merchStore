import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  ImageList,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
  styled,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  Popover,
} from "@mui/material";
import { Box, Stack, display, palette } from "@mui/system";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import {
  button_black,
  select_menu_black,
  select_black,
  toggle_button_black,
  PopoverStyle,
} from "../styles/Styles";
import {
  closeButton,
  helperNotation,
  productBuy,
  productBuyButton,
  productMain,
  productMainImage,
  ProductPopover,
  productPrice,
  productPriceBox,
  productSubImage,
  SizeButtonGroup,
  ToggleButtonSeparations,
} from "../styles/ProductPopupStyles";
import { bold, fontJura, themeColor } from "../styles/fontStyles";

export default function ProductPopup({
  trigger,
  onClick,
  product,
  cart,
  setCart,
}) {
  const theme = useTheme();
  const mainPic = 0;

  const [pic, setPic] = useState(mainPic);
  const [shippingPopover, setShippingPopover] = useState(null);
  const shippingOpen = Boolean(shippingPopover);

  const [sizePopover, setSizePopover] = useState(null);
  const sizeOpen = Boolean(sizePopover);
  const [size, setSize] = useState();
  const handleSize = (event, newSize) => {
    setSize(newSize);
  };

  const cartHandler = () => {
    if (cart.length < 1) {
      setCart([product]);
    } else {
      setCart((outdatedCart) => {
        for (let i = 0; i < outdatedCart.length; i++) {
          if (outdatedCart[i].id === product.id) {
            return outdatedCart;
          }
        }
        return [...outdatedCart, product];
      });
    }
  };

  return product ? (
    <Dialog
      open={trigger}
      maxWidth="xl"
      fullWidth
      onClose={onClick}
      PaperProps={{
        sx: {
          bgcolor: "background",
          width: "62%",
          height: "72%",
          borderRadius: "2px",
        },
      }}
    >
      <DialogContent
        classes={{ root: { m: 0, p: 0 } }}
        sx={{ "&.MuiDialogContent-root": { m: 0, p: 0 } }}
      >
        <Stack direction="row" sx={{ height: "100%", hight: "100%" }}>
          <Stack
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={product.images[pic]}
              sx={productMainImage}
            ></Box>
            <Stack
              sx={{ width: "65%", borderRadius: 2 }}
              direction="row"
              justifyContent="space-evenly"
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
          </Stack>
          <Box sx={productMain(theme)}>
            <Box sx={closeButton}>
              <IconButton sx={themeColor} onClick={onClick}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </Box>
            <Typography variant="h3">{product.title}</Typography>
            <hr />
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body1" sx={bold}>
              Product Details:
            </Typography>

            <List>
              <ListItem>Adult Heavyweight Hoodie</ListItem>
              <ListItem>70% Cotton, 30% Polyester</ListItem>
              <ListItem>
                <Typography variant="body1">
                  Washing Instructions: Wash 30C. Wash inside out like with
                  colors. DO NOT BLEACH. Tumble dry low, DO NOT IRON.
                </Typography>
              </ListItem>
            </List>

            <ToggleButtonGroup
              value={size}
              exclusive
              onChange={handleSize}
              aria-label="size"
              sx={SizeButtonGroup}
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

            <Box sx={productBuy}>
              <Box sx={productPriceBox}>
                <Typography variant="h5" sx={[bold, fontJura]}>
                  {product.price}$
                </Typography>
              </Box>
              <ToggleButtonGroup sx={productBuyButton}>
                <ToggleButton
                  onClick={() => cartHandler()}
                  variant="outlined"
                  sx={[button_black, productBuyButton]}
                >
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Add To Cart
                  </Typography>
                </ToggleButton>
                <ToggleButton sx={[button_black, productBuyButton]}>
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Buy Now
                  </Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Typography
              variant="body1"
              sx={helperNotation}
              aria-owns={shippingOpen ? 'mouse-over-popover' : undefined}
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
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
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
              <Typography variant="body1" sx={ProductPopover}>
                Ships within 2-3 business days, available only in Greater
                Toronto Area.
              </Typography>
            </Popover>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  ) : (
    ""
  );
}
