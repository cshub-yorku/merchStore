import React, { useState } from 'react'
import { Paper, Box, Grid, Typography, InputLabel, MenuItem, FormControl, Select, NativeSelect } from '@mui/material'

export default function Popup( { trigger, onClick }) {
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    }
    const box = {
        position: 'fixed', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',

        width: '100vw',
        height: '100vh'
    }

    const grid = {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "3fr 4fr",
    }

    const boxOne = {
        width: "100%",
        height: "100%",
    }

    const boxTwo = {
        width: "100%",
        height: "100%",

        backgroundColor: "#C0BDDB",
    }
    return ( trigger ? 
    <Box sx={box}>
        <Box onClick={onClick} sx={{width: "100%", height: '100%', minWidth: "100vw", backgroundColor: "rgba(0,0,0,0.8)", zIndex: "0",}}></Box>
        <Box sx={{position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
        <Paper sx={{ width: "75vw", height: "85vh", zIndex:"100", }}>
            <Grid sx={grid}>
                <Box sx={boxOne}>
                    <Grid sx={{ width: "100%", height: "100%", display: "grid", gridTemplateRows: "3fr 1fr"}}>
                        <Box>
                        
                        </Box>
                        <Box>

                        </Box>
                    </Grid>
                </Box>
                <Box sx={boxTwo}>
                    <Typography variant="h3">CSHub: Hacker's Black Shirt</Typography>
                    <Typography variant="subtitle1">C $25.00</Typography>
                    <Box>
                        <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Age
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{ name: 'age', id: 'uncontrolled-native'}}>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                        </FormControl>
                    </Box>
                </Box>
            </Grid>
        </Paper>
        </Box>
    </Box>
    : "");
}
