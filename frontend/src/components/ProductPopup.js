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
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import {
  button_black,
  toggle_button_black,
  PopoverStyle,
} from "../styles/Styles";
import {
  closeButton,
  helperNotation,
  PopoverText,
  productBuy,
  productBuyButton,
  productMain,
  productMainImage,
  ProductPopover,
  productPriceBox,
  productPriceText,
  productSubImage,
  SizeButtonGroup,
  ToggleButtonSeparations,
} from "../styles/ProductPopupStyles";
import { bold, fontJura, medium, themeColor } from "../styles/fontStyles";
import { useNavigate } from "react-router";

const Pic = styled(Box)({
  width: "25%",
  borderRadius: 4,

  '&:hover': {
    border: '1px solid',
    borderColor: '#FFF',
  }
});

export default function ProductPopup({ trigger, onClick, product, cart, setCart }) {
  const navigate = useNavigate();
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
          {/* LEFT HALF */}
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
            <Typography variant="h3" sx={[medium, fontJura]}>{product.title}</Typography>
            <hr />
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

              <Box></Box>
              <Button
                
                onClick={() => cartHandler()}
                variant="outlined"
                sx={{
                  width: "100%",
                  my: 4,
                  width: "50%",
                  height: 50, button_black
                }}
                
                
                
              >
                Add To Cart
              </Button>

              <Typography variant="body1">{product.description}</Typography>
              <Typography>Product Details:</Typography>

              <List>
                <ListItem>Adult Heavyweight Hoodie</ListItem>
                <ListItem>70% Cotton, 30% Polyester</ListItem>
                <ListItem>
                  <Typography variant="body1">Washing Instructions: Wash 30C. Wash inside out like with
                  colors. DO NOT BLEACH. Tumble dry low, DO NOT IRON.</Typography>
                </ListItem>
              </List>

              <Typography>
                Shipping Info: Ships within 2-3 business days, available only in
                Greater Toronto Area.
              </Typography>
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
        </Stack>
      </DialogContent>
    </Dialog>
  ) : (
    ""
  );
}
