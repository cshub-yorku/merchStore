import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Divider, IconButton, ButtonGroup, ToggleButton, Button, Typography, Drawer, Box, Stack, Grid, Avatar } from "@mui/material";
import { DeleteOutlineOutlined, ShoppingBag, VapingRooms } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import { subHeader, mainHeader, prices, headers, itemContainer, quantity, itemStackStyle, checkoutBtn, itemBtnGroup, bottomBtnBox, button_gray, itemImage, white_divider, cart_item_total } from '../styles/CartDrawer.js'
import { button_white, button_black, button_theme } from '../styles/Styles.js'
import { useTheme } from "@emotion/react";
import { useStoreContext } from "../controllers/StoreContext.js";
import { logo } from "../styles/navBarStyles.js";
import { bold } from "../styles/fontStyles.js";

export default function CartDrawer({ setCart, trigger, passFunction }) {
  const navigate = useNavigate();

  const removeItem = (i) => {
    let cartCopy = cart.filter(item => item.id !== cart[i].id)
    setCart(cartCopy);
  }

  const store = useStoreContext();
  const cart = store.getAllItems();

  const theme = useTheme();
  return (
    <>

      {/* SIDEBAR COMPONENT ADDED HERE FOR NOW */}

      <Drawer
        anchor="right"
        open={trigger}
        onClose={() => passFunction(false)}
        sx={{ position: 'relative' }}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            overflow: 'auto',
          }
        }}
      >
        <Box
          p={3}
          sx={{
            backgroundColor: "#000",
            borderRadius: "4px 0px 0px 4px",
            height: "100%",
            display: 'flex',
            flexDirection: 'column',


            [theme.breakpoints.down('mobile')]: {
              width: "100vw"
            },

            [theme.breakpoints.between('mobile', 'tablet')]: {
              width: "55vw"
            },

            [theme.breakpoints.between('tablet', 'hd')]: {
              width: "40vw"
            },

            [theme.breakpoints.between('hd', 'fhd')]: {
              width: "28vw"
            },

            [theme.breakpoints.between('fhd', 'uhd')]: {
              width: "23vw"
            },

            [theme.breakpoints.up('uhd')]: {
              width: "23vw"
            },
          }}
          textAlign="center"
          role="presentation"
        >
          <IconButton onClick={() => passFunction(false)} sx={{ color: "#fff", mb: '1%', ml: '90%' }} >
            <CloseIcon />
          </IconButton>
          <Box sx={{ 
            // display: 'grid', gridAutoRows: 'auto', rowGap: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5%',
            maxWidth: '100%', overflow: 'auto', flex: 1 }}>
              {cart.size === 0 && <Typography variant="">No items in cart yet!</Typography>}
            {Array.from(cart).map((item) => {

              let product = store.getProduct(item[0])
              // console.log(product);
              return (

                <Box sx={{ mr: 3, width: '90%' }}>
                  <Stack sx={itemStackStyle} direction="row" alignItems="center">
                    {/* Item Image */}
                    <Avatar sx={[itemImage]} variant="rounded" src={product.images[0]}></Avatar>
                    {/* Item Details */}
                    <Box sx={[itemContainer]}>
                      <Box sx={[headers]}>
                        <Typography variant="h6" sx={[mainHeader, bold]}>
                          {product.name}
                        </Typography>
                        <Typography sx={[subHeader]}>
                          Details: Small, Black
                        </Typography>
                      </Box>

                      <Stack direction="column">
                        <Box sx={{width: '40%', mb: '5%'}}>
                          <ButtonGroup sx={{width: '100%'}} variant="contained" aria-label="outlined primary button group">
                            <Button sx={[button_theme, { borderRightWidth: '0px !important' }]} onClick={() => store.changeItemAmount(product, -1)}>-</Button>
                            <Box sx={[quantity]}>{item[1]}</Box>
                            <Button sx={[button_theme, { border: 'none' }]} onClick={() => store.changeItemAmount(product, 1)}>+</Button>
                          </ButtonGroup>
                        </Box>

                        <Stack sx={{mb: '3%'}} direction="row">
                          <Typography sx={[prices]}>
                            ${product.price}x{item[1]}=${product.price * item[1]}
                          </Typography>
                        </Stack>
                      </Stack>

                    </Box>
                    <IconButton onClick={() => store.removeItem(product)}>
                      <DeleteOutlineOutlined sx={{
                        color: "#793CEE", transition: '100ms', '&:hover': {
                          color: '#282A4E'
                        }
                      }} />
                    </IconButton>
                  </Stack>
                </Box>

              );
            })}

          </Box>
          <Box sx={{ my: 'auto', mb: '0rem' }}>
            <Divider sx={[white_divider]} />
            <Typography variant="h6" sx={[cart_item_total, bold]}>Total: ${store.getProductTotal()}</Typography>
          </Box>
          <Box sx={bottomBtnBox}>
            <Button sx={[checkoutBtn, button_theme]}
              onClick={() => navigate('./checkout', { state: { cart: cart } })}>
              Checkout
            </Button>
            {/* <Button sx={[checkoutBtn, button_gray]}>
              Checkout As Guest
            </Button> */}
          </Box>

        </Box>
      </Drawer>
    </>
  );
}
