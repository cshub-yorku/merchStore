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
} from "@mui/material";
import { Box, Stack, display, palette } from "@mui/system";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { button_black, select_menu_black, select_black } from "../styles/Styles";
import { closeButton, productBuy, productBuyButton, productMain, productMainImage, productPrice, productPriceBox, productSubImage } from "../styles/ProductPopupStyles";
import { bold, fontJura, themeColor } from "../styles/fontStyles";



export default function ProductPopup({ trigger, onClick, product, cart, setCart }) {
  const theme = useTheme();
  const mainPic = 0;
  const [pic, setPic] = useState(mainPic);
  const cartHandler = () => {
    if (cart.length < 1) {
      setCart([product]);
    } else {
      setCart(outdatedCart => {
        for (let i = 0; i < outdatedCart.length; i++) {
          if (outdatedCart[i].id === product.id) {
            return outdatedCart;
          }
        }
        return [...outdatedCart, product]
      })
    }
  }
  return (product ?
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
                onMouseEnter={() => { setPic(1) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[1]}
                sx={productSubImage}
              ></Box>
              <Box
                onMouseEnter={() => { setPic(2) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[2]}
                sx={productSubImage}
              ></Box>
              <Box
                onMouseEnter={() => { setPic(3) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[3]}
                sx={productSubImage}
              ></Box>
            </Stack>
          </Stack>
          <Box
            sx={productMain}
          >
            <Box sx={closeButton}>

              <IconButton
                sx={themeColor}
                onClick={onClick}
              >
                <CloseIcon></CloseIcon>
              </IconButton>
            </Box>
            <Typography variant="h3">{product.title}</Typography>
            <hr />
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body1" sx={bold}>Product Details:</Typography>

            <List>
              <ListItem>Adult Heavyweight Hoodie</ListItem>
              <ListItem>70% Cotton, 30% Polyester</ListItem>
              <ListItem>
                <Typography variant="body1">Washing Instructions: Wash 30C. Wash inside out like with
                  colors. DO NOT BLEACH. Tumble dry low, DO NOT IRON.</Typography>
              </ListItem>
            </List>

            <ToggleButtonGroup>
              <ToggleButton>S</ToggleButton>
              <ToggleButton>M</ToggleButton>
              <ToggleButton>L</ToggleButton>
            </ToggleButtonGroup>

            <Typography variant="body1" color="gray"> ⓘ Size Guide </Typography>

            {/* <FormControl
                margin="normal"
                sx={{ color: "#FFFFFF", width: "25%" }}
              >
                <Select displayEmpty id="product-size-select">
                  <MenuItem value={10}>Small</MenuItem>
                  <MenuItem value={20}>Medium</MenuItem>
                  <MenuItem value={30}>Large</MenuItem>
                </Select>
              </FormControl> */}

            {/* <Typography variant="h5">Quantity</Typography>

              <FormControl
                margin="normal"
                sx={[select_black, { width: '15%'}]}
              >
                <InputLabel>Quantity</InputLabel>
                <Select
                  displayEmpty
                  id="product-quantity-select"
                  inputProps={{ "aria-label": "Without label" }}
                  MenuProps={select_menu_black}
                  // sx={select_base_black}
                >
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                </Select>
              </FormControl> */}

            <Box sx={productBuy}>
              <Box sx={productPriceBox}>
                <Typography variant="h5" sx={[bold, fontJura]}>{product.price}</Typography>
              </Box>
              <Button
                sx={[button_black, productBuyButton]}
                onClick={() => cartHandler()}
                variant="outlined"
              >
                <Typography variant="h6" sx={[bold, fontJura]}>Add To Cart</Typography>
              </Button>
            </Box>


            <Typography variant="body1" color="gray"> ⓘ Shipping Details </Typography>
          </Box>
      </Stack>
    </DialogContent>
    </Dialog >
    : "");
}
