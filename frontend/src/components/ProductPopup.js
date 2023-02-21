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
} from "@mui/material";
import { Box, Stack, display, palette } from "@mui/system";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { button_black, select_menu_black, select_black } from "../styles/Styles";

const Pic = styled(Box)({
  width: "25%",
  borderRadius: 4,

  '&:hover': {
    border: '1px solid',
    borderColor: '#FFF',
  }
});

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
              sx={{ width: "60%", height: '65%', mb: 5, borderRadius: 7 }}
            ></Box>
            <Stack
              sx={{ width: "65%", borderRadius: 2 }}
              direction="row"
              justifyContent="space-evenly"
            >
              <Pic
                onMouseEnter={() => { setPic(1) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[1]}
              ></Pic>
              <Pic
                onMouseEnter={() => { setPic(2) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[2]}
              ></Pic>
              <Pic
                onMouseEnter={() => { setPic(3) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[3]}
              ></Pic>
            </Stack>
          </Stack>
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              width: "50%",
              height: "100%",
              border: "#FFFFFF",
            }}
          >
            <Box sx={{ position: 'absolute', right: '1px' }}>
              <IconButton
                sx={{ mr: "2%", mt: "2%", ml: "auto", color: "text.primary" }}
                onClick={onClick}
              >
                <CloseIcon></CloseIcon>
              </IconButton>
            </Box>

            <Box>
              <Typography variant="h3">{product.title}</Typography>
              <Typography variant="body1" sx={{ lineHeight: "50%" }}>
                ${product.price}
              </Typography>
              <Typography variant="h5">Size</Typography>

              <FormControl
                margin="normal"
                sx={{ color: "#FFFFFF", width: "25%" }}
              >
                <Select displayEmpty id="product-size-select">
                  <MenuItem value={10}>Small</MenuItem>
                  <MenuItem value={20}>Medium</MenuItem>
                  <MenuItem value={30}>Large</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="h5">Quantity</Typography>

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
              </FormControl>

              <Box></Box>
              <Button
                sx={button_black}
                onClick={() => cartHandler()}
                variant="outlined"
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
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
    : "");
}
