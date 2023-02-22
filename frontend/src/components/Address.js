import { Box, Typography,Button,IconButton } from '@mui/material';
import React, { useState } from 'react'
import Profile from "./Profile";
import "../styles/Admin.css";
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

                    <Typography sx={{
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
                        onClick={ ()=> navigate('/')}
                      >
                        <EditIcon sx={{ fontSize: 30 , color: "black", width:"1.5rem"}}></EditIcon>
                      </IconButton>User Address</Typography>
                        
                        
                      </Box>
                      
    </>
  )
}
