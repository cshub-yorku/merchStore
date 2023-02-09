import React, { useState } from 'react'
import { IconButton, Box, Grid, Paper, Stack, Typography, Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

// position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
export default function Payment() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    let location = useLocation();
    const cart = location.state.cart;

    const removeItem = (i) => {
        let cartCopy = cart.filter(item => item.id !== cart[i].id)
        return cartCopy;
    }

  return (
    <>
    <Box sx={{width: '100vw', height: '100vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <Paper sx={{width: '50%', minHeight: '50%', 
                    backgroundColor: "#BBB"}}>
            <Typography variant="h5" sx={{textAlign: 'center', margin: '1rem'}}>
                Confirm Your Payment Method!
            </Typography>
            {( () => {
              let drawer = [];
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
              return drawer;
          })()}
            <Box sx={{width: '100%', height: '100%', display: 'table', margin: '0 auto'}}>
                <Grid sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    <Box sx={{display: 'table', margin: '0 auto'}}>
                        <Button>
                            <Typography>
                                Pickup In-Person
                            </Typography>
                        </Button>
                    </Box>

                    <Box sx={{display: 'table', margin: '0 auto'}}>
                        <Button>
                            <Typography>
                                E-Transfer
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </Paper>
    </Box>
    </>
  )
}
