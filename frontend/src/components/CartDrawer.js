import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Divider, IconButton, ButtonGroup, ToggleButton, Button, Typography, Drawer, Box, Stack, Grid, Avatar } from "@mui/material";
import { ShoppingBag, VapingRooms } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import { subHeader, mainHeader, prices, headers, btnStyle, itemContainer, quantity_black, itemStackStyle, checkoutBtn, itemBtnGroup, bottomBtnBox, button_gray, itemImage, white_divider, cart_item_total} from '../styles/CartDrawer.js'
import { button_white, button_black, button_theme } from '../styles/Styles.js'
import { useTheme } from "@emotion/react";
import { useStoreContext } from "../controllers/StoreContext.js";

export default function CartDrawer({setCart, trigger, passFunction }) {
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
        sx={{position: 'relative'}}
        PaperProps={{
          sx: {
            backgroundColor: "transparent"
          }
        }}
      >
        <Box
          p={3}
          sx={{
            backgroundColor: "#1f1e3a",
            borderRadius: "4px 0px 0px 4px",
            height: "100vh",
            
            [theme.breakpoints.down('mobile')]: {
              width: "80vw"
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
          <Grid sx={{display: 'grid', gridAutoRows: 'auto', rowGap: '1rem', maxWidth: '100%'}}>
            {Array.from(cart).map((item) => {

              let product = store.getProduct(item[0])
              console.log(product);
              return (

                <>
                  <Stack sx={itemStackStyle} direction="row" alignItems="center">
                    {/* Item Image */}
                    <Avatar sx={[itemImage]} variant="rounded" src={product.images[0]}></Avatar>
                    {/* Item Details */}
                    <Box sx={[itemContainer]}>
                      <Box sx={[headers]}>
                        <Typography sx={[mainHeader]}>
                          {product.name}
                        </Typography>
                        <Typography sx={[subHeader]}>
                          Details: Small, Black
                        </Typography>
                      </Box>

                      <Stack sx={itemStackStyle} direction="row" alignItems="center">
                        <Box>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                          <Button sx={[btnStyle]} onClick={ () => store.removeItem(product) }>-</Button>
                          <Box sx={[quantity_black]}>{item[1]}</Box>
                          <Button sx={[btnStyle]} onClick={ () => store.addItem(product) }>+</Button>
                        </ButtonGroup>
                        </Box>
                        
                        <Stack sx={itemStackStyle} direction="row" alignItems="center">
                          <Typography sx={[prices]}>
                            ${product.price} x {item[1]} = ${product.price * item[1]}
                          </Typography>

                          <IconButton>
                            <CloseIcon sx={{color: "#fff"}}/>
                          </IconButton>
                        </Stack>
                        
                      </Stack>
                    </Box>
                    
                  </Stack>
                  </>

              );
            })}
          <Box>
            <Divider sx={[white_divider]}/>
            <Typography sx={[cart_item_total]}>Total: </Typography>
          </Box>

          </Grid>
          <Box sx={bottomBtnBox}>
            <Button sx={[checkoutBtn, button_theme]}
                    onClick={ ()=> navigate('./checkout', {state: {cart: cart}})}>
              Checkout
            </Button>
            <Button sx={[checkoutBtn, button_gray]}>
              Checkout As Guest
            </Button>
          </Box>

        </Box>
      </Drawer>
    </>
  );
}
