import { Box, Typography,Button,IconButton, Input } from '@mui/material';
import React, { useState } from 'react'
import Profile from "./Profile";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";






export default function Address() {
  const navigate = useNavigate();

  
  const [editAddress, setEditAddress] = useState(false);

  return (
    <>

                      <Box sx={{width: '20vw',
                            height: "10rem",
                            backgroundColor: "#121212",
                           
                            backgroundColor: "white",
                            border: "none",
                            borderRadius: "8px",
                            marginTop: "15px",
                            display: "flex",
                            justifyContent:"center",
                            alignItems:"flex-start",
                            flexDirection:"column"
                            
                      }}>


                      { editAddress ? (<Box sx={{marginLeft: "4rem"}}>
                                                <Typography sx={{color: "black"}} onClick = {() => setEditAddress(false)}><IconButton
                                                        className="navMenu"
                                                        size="large"
                                                        edge="start"
                                                        sx={{ color: "text.primary" }}
                                                        onClick = {() => setEditAddress(false)}
                                                      >
                                                <ArrowBackIcon sx={{ fontSize: 25 ,color: "black"}}></ArrowBackIcon>
                                              </IconButton>GO BACK</Typography>
                                              <Input sx={{border: "1px solid black", borderRadius: "8px", color: "black"}} value = "Address"/>
                                              <Button onClick = {() => setEditAddress(false)} sx={{backgroundColor: "#121212", color: "white", margin: "1rem"}}>EDIT</Button>
                                        </Box>) : (<><Typography sx={{
                                                      fontSize: "1.5rem",
                                                      fontWeight: "500",
                                                      paddingLeft: "1rem",
                                                    
                                                      color: "black",
                                                      // fontFamily: "IBM Plex Sans"
                                                    }}>
                                                      <IconButton
                                                    className="navMenu"
                                                    size="large"
                                                    edge="start"
                                                    sx={{ color: "text.primary" }}
                                                    onClick = {() => setEditAddress(true)} 
                                                  >
                                                    <EditIcon sx={{ fontSize: 30 , color: "black", width:"1.5rem"}}></EditIcon>
                                                  </IconButton>User Address</Typography></>)}


                    
                        
                        
                                       </Box>
                      
    </>
  )
}
