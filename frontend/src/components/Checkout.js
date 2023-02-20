import React, { useState, useEffect} from 'react'
import { Divider, Stack, Box, Grid, Button, Typography, TextField, MenuItem, FormControl, InputLabel, Select} from '@mui/material'
import { useLocation } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.25rem',
    color: 'black',
};

export default function Checkout() {
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

                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'start', paddingBottom: '4vh'}}>
                        <Stack direction="row" alignItems="center">
                            <Typography sx={linkStyle}>Cart</Typography>
                            <KeyboardArrowRightIcon />

                            <Typography sx={linkStyle}>Information</Typography>
                            <KeyboardArrowRightIcon />

                            <Typography sx={linkStyle}>Shipping</Typography>
                            <KeyboardArrowRightIcon />

                            <Typography sx={linkStyle}>Payment</Typography>
                            <KeyboardArrowRightIcon />
                        </Stack>
                    </Box>

                    <Grid sx={{display: 'grid', gridAutoRows: 'auto', rowGap: '1rem'}}>
                    <Typography variant="h6" sx={{fontWeight: '600'}}>
                        Contact Information
                    </Typography>
                    <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                    
                    <Typography variant="h6" sx={{fontWeight: '600'}}>
                        Shipping Address
                    </Typography>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Street Address" variant="outlined" />
                    <TextField id="outlined-basic" label="Apartment, Suit, etc. (optional)" variant="outlined" />
                    <TextField id="outlined-basic" label="City" variant="outlined" />

                    <Box>
                        <Grid sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '1rem'}}>
                        <FormControl>
                            <InputLabel>Country</InputLabel>
                            <Select value={age}
                                    label="Country"
                                    onChange={handleChange}
                                    >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <InputLabel>State</InputLabel>
                            <Select value={age}
                                    label="State"
                                    onChange={handleChange}
                                    >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField id="outlined-basic" label="ZIP Code" variant="outlined" />
                        </Grid>
                    </Box>

                    <Grid sx={{display: 'flex', gridTemplateColumn: '1fr 2fr'}}>
                        <Box sx={{marginRight: 'auto'}}>
                            <Button sx={{padding: '1rem', fontSize: '1rem'}}>Return to Cart</Button>
                        </Box>
                        <Box sx={{marginLeft: 'auto'}}>
                            <Button variant='contained' sx={{padding: '1rem', fontSize: '1rem'}}>Continue to Shipping</Button> 
                        </Box>
                    </Grid>
                    </Grid>
                </Box>

                {/* Left side of the screen */}
                <Box sx={{backgroundColor: '#C0BDDB', paddingTop: '4vh'}}>
                <Box sx={{width: '60%', margin: '0 auto'}}>
                <Grid sx={{display: 'grid', gridAutoRows: 'auto', rowGap: '1rem', width: '100%'}}>
                    {(() => {
                        let list = [];
                        if (cart != undefined) {
                            
                            for(let i = 0; i < cart.length; i++){
                                list.push(
                                <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
                                    <Box component="img" src={cart[i].images[0]} sx={{width: '82px'}}></Box>
                                    <Box>
                                        <Typography sx={{fontWeight: '800', fontFamily: 'Montserrat'}}>{cart[i].title}</Typography>
                                        <Typography>XL</Typography>
                                    </Box>
                                    <Typography sx={{textAlign: 'center'}}>1</Typography>
                                    <Typography>${cart[i].price}</Typography>
                                </Stack>
                                );
                            }
                        }
                        return list;
                    })()}
                    <Divider />
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'start'}}>
                    <Grid sx={{width: '85%', display: 'grid', gridTemplateColumns: '2fr 1fr', columnGap: '1rem'}}>
                        <TextField id="outlined-basic" label="Promo Code" variant="outlined" />
                        <Button>Apply</Button>
                    </Grid>
                    </Box>
                    <Divider />
                    <Grid sx={{display: 'flex', gridTemplateColumn: '1fr 1fr'}}>
                        <Typography sx={{fontWeight: '600'}}>Subtotal</Typography>
                        <Typography sx={{marginLeft: 'auto'}}>$25.00</Typography>
                    </Grid>
                    
                    <Grid sx={{display: 'flex', gridTemplateColumn: '1fr 1fr'}}>
                        <Typography sx={{fontWeight: '600'}}>Shipping</Typography>
                        <Typography sx={{marginLeft: 'auto'}}>calculated at next step</Typography>
                    </Grid>

                    <Divider />
                    <Grid sx={{display: 'flex', gridTemplateColumn: '1fr 1fr'}}>
                        <Typography sx={{fontWeight: '600'}}>Total</Typography>
                        <Typography sx={{marginLeft: 'auto'}}>$25.00</Typography>
                    </Grid>
                    
                </Grid>
                </Box>
                </Box>
            </Grid>
        </Box>
    </>
    )
}
