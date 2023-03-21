import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Divider, IconButton, ButtonGroup, ToggleButton, Button, Typography, Drawer, Box, Stack, Grid, Avatar } from "@mui/material";
import { ShoppingBag, VapingRooms } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import { subHeader, mainHeader, prices, headers, btnStyle, itemContainer, quantity_black, itemStackStyle, checkoutBtn, itemBtnGroup, bottomBtnBox, button_gray, itemImage, white_divider, cart_item_total} from '../styles/CartDrawer.js'
import { button_white, button_black, button_theme } from '../styles/Styles.js'

export default function CartDrawer({ cart, setCart }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const removeItem = (i) => {
    let cartCopy = cart.filter(item => item.id !== cart[i].id)
    setCart(cartCopy);
  }
  return (
    <>
      <IconButton
        className="cartButton"
        size="large"
        edge="start"
        sx={{ color: "text.primary" }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <ShoppingBag sx={{ fontSize: 40 }}></ShoppingBag>
      </IconButton>

      {/* SIDEBAR COMPONENT ADDED HERE FOR NOW */}

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{position: 'relative'}}
      >
        <Box
          p={3}
          width="22.5vw"
          height="100vh"
          sx={{
            backgroundColor: "#1f1e3a",
            borderRadius: "4px 0px 0px 4px",
          }}
          textAlign="center"
          role="presentation"
        >
          <Grid sx={{display: 'grid', gridAutoRows: 'auto', rowGap: '1rem', maxWidth: '100%'}}>
          {( () => {
              let drawer = [];
              if (isDrawerOpen) {
              for(let i = 0; i < cart.length; i++){
                drawer.push(
                  <>
                  <Stack sx={itemStackStyle} direction="row" alignItems="center">
                    {/* Item Image */}
                    <Avatar sx={[itemImage]} variant="rounded" src={cart[i].images[0]}></Avatar>
                    {/* Item Details */}
                    <Box sx={[itemContainer]}>
                      <Box sx={[headers]}>
                        <Typography sx={[mainHeader]}>
                          Hacker's Black Shirt
                        </Typography>
                        <Typography sx={[subHeader]}>
                          Details: Small, Black
                        </Typography>
                      </Box>

                      <Stack sx={itemStackStyle} direction="row" alignItems="center">
                        <Box>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                          <Button sx={[btnStyle]}>-</Button>
                          <Box sx={[quantity_black]}>3</Box>
                          <Button sx={[btnStyle]}>+</Button>
                        </ButtonGroup>
                        </Box>
                        
                        <Stack sx={itemStackStyle} direction="row" alignItems="center">
                          <Typography sx={[prices]}>
                            $69 x 3 = $207
                          </Typography>

                          <IconButton>
                            <CloseIcon sx={{color: "#fff"}}/>
                          </IconButton>
                        </Stack>
                        
                      </Stack>
                    </Box>
                    
                  </Stack>
                  </>
                  )
                }
              }
              return drawer;
          })()}
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
