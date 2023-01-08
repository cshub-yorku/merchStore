import React from 'react'
import { Menu, Box, Grid, Button, Typography, TextField, MenuItem, FormControl, InputLabel, Select} from '@mui/material'
import { Link } from 'react-router-dom';

const menuItemStyle = {
    sx: {
        "&& .MuiPaper-root": {
            color: "background",
            backgroundColor: "textColor"
        }
    }
}

const checkoutStyle = {
    textDecoration: 'none',
    fontSize: '1.5rem',
    color: 'white'
};

export default function PurchasePage() {
    const [age, setAge] = React.useState('');
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
                        <Link sx={checkoutStyle}>Cart</Link>
                        <Box>{'>'}</Box>
                        <Link sx={checkoutStyle}>Information</Link>
                        <Box>{'>'}</Box>
                        <Link sx={checkoutStyle}>Shipping</Link>
                        <Box>{'>'}</Box>
                        <Link sx={checkoutStyle}>Payment</Link>
                    </Box>

                    <Grid sx={{display: 'grid', gridAutoRows: 'auto', rowGap: '1rem'}}>
                    <Typography variant="h6">
                        Contact Information
                    </Typography>
                    <TextField id="outlined-basic" label="Email Address"  variant="outlined" />
                    
                    <Typography variant="h6">
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
                                    MenuProps={menuItemStyle}>
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
                                    MenuProps={menuItemStyle}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField id="outlined-basic" label="ZIP Code" variant="outlined" />
                        </Grid>
                    </Box>

                    <Grid sx={{display: 'flex', gridTemplateColumn: '1fr 1fr'}}>
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
                <Box>
                    Total
                </Box>
            </Grid>
        </Box>
    </>
    )
}
