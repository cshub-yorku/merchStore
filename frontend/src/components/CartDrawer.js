import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/CartDrawer.css";
import { IconButton, Button, Typography, Drawer, Box, Stack, Grid } from "@mui/material";
import { ShoppingBag, VapingRooms } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

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
          width="20vw"
          height="100vh"
          sx={{
            backgroundColor: "#1f1e3a",
            borderRadius: "20px 0px 0px 20px",
          }}
          textAlign="center"
          role="presentation"
        >
          <Grid sx={{display: 'grid', gridAutoRows: 'auto', rowGap: '1rem'}}>
          {( () => {
              let drawer = [];
              if (isDrawerOpen) {
              for(let i = 0; i < cart.length; i++){
                drawer.push(
                  <Stack direction="row" justifyContent="space-around" alignItems="center">
                    <Box component="img" src={cart[i].images[0]} sx={{width: '82px'}}></Box>
                    <Box>
                      <Typography sx={{fontWeight: '800', fontFamily: 'Montserrat'}}>{cart[i].title}</Typography>
                      <Grid sx={{display: 'flex', gridTemplateColumns: '1fr 1fr 1fr', justifyContent: 'space-between', textAlign: 'center' }}>
                        <Typography sx={{textAlign: 'center'}}>1</Typography>
                        <Typography>{cart[i].price}</Typography>
                        <Typography>XL</Typography>
                      </Grid>
                    </Box>
                      <IconButton sx={{color: "text.primary"}} onClick={()=> removeItem(i)}>
                        <CloseIcon />
                      </IconButton>
                  </Stack>
                  )
                }
              }
              return drawer;
          })()}
          </Grid>
          <Box sx={{position: 'absolute', bottom: 0, width: '20vw'}}>
            <Button onClick={ ()=> navigate('./checkout', {state: {cart: cart}})}
                    sx={{width: '100%', padding: '1.25rem', marginBottom: '1rem'}}>
              <Typography>
                Checkout
              </Typography>
            </Button>
          </Box>

        </Box>
      </Drawer>
    </>
  );
}
