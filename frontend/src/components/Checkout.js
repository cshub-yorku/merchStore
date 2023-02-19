import React, { useState, useEffect} from 'react'
import { Divider, IconButton, Stack, Box, Grid, Button, Typography, TextField, MenuItem, FormControl, InputLabel, Select} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.25rem',
    color: 'black',
};

export default function Checkout() {
    const navigate = useNavigate();
    let location = useLocation();
    const cart = location.state.cart;
    const [ age, setAge ] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
    <>
        <Box sx={{width: '100vw', height: '100vh'}}>
            <Grid sx={{width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                <Box sx={{ width: '65%', margin: '0 auto'}}>
                    <Box
                        component="img"
                        src="./global/CSHub.png"
                        className="cshub-logo-container"
                        sx={{
                        height: 125,
                        mr: "50hw",
                        my: 2,
                        }}
                    ></Box>

                    {/* Navigation */}
                    {/* <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'start', paddingBottom: '4vh'}}>
                        <Stack direction="row" alignItems="center">
                            <Typography sx={linkStyle}>Cart</Typography>
                            <KeyboardArrowRightIcon />

                            <Typography sx={linkStyle}>Information</Typography>
                            <KeyboardArrowRightIcon />

                            <Typography sx={linkStyle}>Shipping</Typography>
                            <KeyboardArrowRightIcon />

                            <Typography sx={linkStyle}>Payment</Typography>
                        </Stack>
                    </Box> */}

                    <Grid sx={{display: 'grid', gridAutoRows: 'auto', rowGap: '1rem'}}>
                    <Typography variant="h6" sx={{fontWeight: '600'}}>
                        Contact Information
                    </Typography>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" />

                    <Typography variant="h6" sx={{fontWeight: '600'}}>
                        Order Details
                    </Typography>
                    <Grid sx={{display: 'flex', gridTemplateColumn: '1fr 1fr'}}>
                        <Typography sx={{fontWeight: '600'}}>Subtotal</Typography>
                        <Typography sx={{marginLeft: 'auto'}}>$25.00</Typography>
                    </Grid>

                    <Divider />
                    <Grid sx={{display: 'flex', gridTemplateColumn: '1fr 1fr'}}>
                        <Typography sx={{fontWeight: '600'}}>Total</Typography>
                        <Typography sx={{marginLeft: 'auto'}}>$25.00</Typography>
                    </Grid>
                    <Divider />

                    <Grid sx={{display: 'flex', gridTemplateColumn: '1fr 2fr'}}>
                        <Box sx={{marginRight: 'auto'}}>
                            <Button sx={{padding: '1rem', fontSize: '1rem'}}>Return to Cart</Button>
                        </Box>
                        <Box sx={{marginLeft: 'auto'}}>
                            <Button variant='contained' sx={{padding: '1rem', fontSize: '1rem'}}>
                                        Place Order
                            </Button> 
                        </Box>
                    </Grid>
                    </Grid>
                </Box>

                {/* Left side of the screen */}
                <Box sx={{backgroundColor: '#C0BDDB', paddingTop: '4vh'}}>
                <Box sx={{width: '85%', margin: '0 auto'}}>
                <Grid sx={{display: 'grid', gridAutoRows: 'auto', rowGap: '1rem', width: '100%'}}>
                    {(() => {
                        let list = [];
                        if (cart != undefined) {
                            
                            for(let i = 0; i < cart.length; i++){
                                list.push(
                                <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
                                    <Box component="img" src={cart[i].images[0]} sx={{width: '12vw', borderRadius: '20px'}}></Box>
                                    <Box>
                                        <Typography sx={{fontWeight: '800', fontFamily: 'Montserrat'}}>{cart[i].title}</Typography>
                                        <Typography>XL</Typography>
                                    </Box>
                                    <Typography sx={{textAlign: 'center'}}>1</Typography>
                                    <Typography>${cart[i].price}</Typography>

                                    <IconButton sx={{color: "text.primary"}}>
                                        <CloseIcon />
                                    </IconButton>
                                </Stack>
                                );
                            }
                        }
                        return list;
                    })()}
                </Grid>
                </Box>
                </Box>
            </Grid>
        </Box>
    </>
    )
}
