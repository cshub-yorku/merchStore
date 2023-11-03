import React, { useContext, useState } from 'react'
import { Dialog, DialogContent, Divider, IconButton, Stack, Box, Grid, Button, Typography, TextField } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { bold } from '../styles/fontStyles';
import { useStoreContext } from '../controllers/StoreContext';
import { DeleteOutline } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { bodyGrid, cartItems, contacts, container } from '../styles/checkoutStyles';
import { button_theme, field_styled } from '../styles/Styles';

const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.25rem',
    color: 'black',
};

export default function Checkout() {
    const theme = useTheme()
    const [trigger, setTrigger] = useState(false);
    const navigate = useNavigate();
    let location = useLocation();
    const store = useStoreContext();
    const cart = store.cart

    const handleClose = () => {
        setTrigger(prev => !prev);
    }

    return (
        <Box sx={{ width: '100vw', minHeight: '100vh', display: 'flex', }}>
            <Box sx={container(theme)}>
                <Box sx={bodyGrid(theme)}>
                    <Box sx={contacts(theme)}>
                        <Box sx={{ mx: 'auto', textAlign: 'center' }}>
                            <Box
                                component="img"
                                src="./global/CSHub.png"
                                className="cshub-logo-container"
                                sx={[{
                                    display: 'flex',
                                    height: 125,
                                    mx: 'auto',
                                    mb: '5%'
                                }]}
                            />
                            <Typography variant='h3' sx={bold} >Checkout</Typography>
                            <Typography variant='h6'>Please fill out form below to place your order</Typography>
                        </Box>
                        <Grid sx={{ display: 'grid', gridAutoRows: 'auto', rowGap: '1rem' }}>
                            <Typography variant="h6" sx={{ fontWeight: '600' }}>
                                Contact Information
                            </Typography>
                            <TextField sx={field_styled} id="outlined-basic" label="Full Name" variant="outlined" />
                            <TextField sx={field_styled} id="outlined-basic" label="Email Address" variant="outlined" />
                            <TextField sx={field_styled} id="outlined-basic" label="Phone Number" variant="outlined" />

                            <Typography variant="h6" sx={{ fontWeight: '600' }}>
                                Order Details
                            </Typography>
                            {/* <Grid sx={{ display: 'flex', gridTemplateColumn: '1fr 1fr' }}>
                                <Typography sx={{ fontWeight: '600' }}>Subtotal</Typography>
                                <Typography sx={{ marginLeft: 'auto' }}>$25.00</Typography>
                            </Grid> */}

                            <Divider />
                            <Grid sx={{ display: 'flex', gridTemplateColumn: '1fr 1fr' }}>
                                <Typography sx={{ fontWeight: '600' }}>Total</Typography>
                                <Typography sx={{ marginLeft: 'auto' }}>${store.getProductTotal()}</Typography>
                            </Grid>
                            <Divider />

                            <Grid sx={{ display: 'flex', gridTemplateColumn: '1fr 2fr' }}>
                                <Box sx={{ marginRight: 'auto' }}>
                                    <Button sx={[button_theme, { padding: '1rem', fontSize: '1rem' }]}
                                        onClick={() => navigate('/')}>
                                        Return to Cart
                                    </Button>
                                </Box>
                                <Box sx={{ marginLeft: 'auto' }}>
                                    <Button variant='contained' sx={[button_theme, { padding: '1rem', fontSize: '1rem' }]}
                                        onClick={handleClose}>
                                        Place Order
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Left side of the screen */}
                    <Box sx={cartItems(theme)}>
                        <Box sx={{ width: '85%', margin: '0 auto' }}>
                            <Grid sx={{ display: 'grid', gridAutoRows: 'auto', rowGap: '3rem', width: '100%' }}>
                                {Array.from(cart).map((id, index) => {
                                    const item = store.getProduct(id[0])
                                    return (
                                        <Stack key={index} direction="row" justifyContent="space-between" alignItems="center">
                                            <Box component="img" src={item.images[0]} sx={{ width: '12vw', borderRadius: '20px' }}></Box>
                                            <Box>
                                                <Typography sx={{ fontWeight: '800', fontFamily: 'Montserrat' }}>{item.title}</Typography>
                                                <Typography>XL</Typography>
                                            </Box>
                                            <Typography sx={{ textAlign: 'center' }}>{id[1]}</Typography>
                                            <Typography>${item.price}</Typography>

                                            <IconButton sx={{ color: "#793CEE", '&:hover': {color: "#282A4E", } }} onClick={() => store.removeItem(id[0])}>
                                                <DeleteOutline />
                                            </IconButton>
                                        </Stack>
                                    )
                                })}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Dialog open={trigger}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        bgcolor: "background",
                        width: "25vw",
                        height: "30vh",
                        borderRadius: "12px",
                    },
                }}>
                <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                    <Grid container sx={{ textAlign: 'center', width: '100%' }} direction='column' justifyContent='center' alignItems='center' rowSpacing={2}>
                        <Grid item>
                            <Typography sx={{ textAlign: 'start' }} variant='h4'>
                                Your Order WasSuccessfully Placed!
                            </Typography>
                        </Grid>
                        <Grid item sx={{  }}>
                            <Typography sx={{ textAlign: 'start' }} variant='h6'>
                                You may head back to the home page or continue shopping!
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button sx={button_theme} onClick={() => navigate('/')}>
                                <Typography>
                                    Great!
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Box>
    )
}
