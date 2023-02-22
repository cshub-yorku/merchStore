import { Box, Typography,Button,IconButton } from '@mui/material';
import React, { useState } from 'react'
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







export default function Profile() {
  const navigate = useNavigate();


  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editNumber, setEditNumber] = useState(false);

  return (
    <>
              
                      <Box sx={{width: '20vw',
                            height: "10rem",
                            backgroundColor: "white",
                            border: "none",
                            borderRadius: "8px",
                            marginTop: "15px",
                            display: "flex",
                            justifyContent:"center",
                            alignItems:"flex-start",
                            flexDirection:"column"
                      }}>


                      {editName ? (<>
                                        <Typography sx={{color: "black"}} onClick = {() => setEditName(false)}>EditName Component</Typography>
                                  </>) : editEmail ? (<>
                                        <Typography sx={{color: "black"}} onClick = {() => setEditEmail(false)}>EditEmail Component</Typography>
                                  </>) : editNumber ? (<>
                                        <Typography sx={{color: "black"}} onClick = {() => setEditNumber(false)}>EditNumber Component</Typography>
                                  </>) : (<><Typography sx={{
                          fontSize: "1.5rem",
                          fontWeight: "500",
                          paddingLeft: "1rem",
                          // paddingTop: "2px",
                          color: "black",
                          // fontFamily: "IBM Plex Sans"
                        }}>
                          <IconButton
                        className="navMenu"
                        size="large"
                        edge="start"
                        sx={{ color: "text.primary" }}
                        onClick = {() => setEditName(true)} 
                      >
                        <EditIcon 
                                  sx={{ fontSize: 30 , color: "black", width:"1.5rem"}}></EditIcon>
                      </IconButton>User Name</Typography>


                        <Typography sx={{
                          fontSize: "1.5rem",
                          fontWeight: "500",
                          paddingLeft: "1rem",
                          // paddingTop: "4px",
                          color: "black",
                          // fontFamily: "IBM Plex Sans"
                        }}>
                          <IconButton
                        className="navMenu"
                        size="large"
                        edge="start"
                        sx={{ color: "text.primary" }}
                        onClick = {() => setEditEmail(true)}
                        
                      >
                        <EditIcon sx={{ fontSize: 30 , color: "black", width:"1.5rem"}}></EditIcon>
                      </IconButton>User Email</Typography>


                        <Typography sx={{
                          fontSize: "1.5rem",
                          fontWeight: "500",
                          paddingLeft: "1rem",
                          // paddingTop: "4px",
                          color: "black",
                          // fontFamily: "IBM Plex Sans"
                        }}>
                          <IconButton
                        className="navMenu"
                        size="large"
                        edge="start"
                        sx={{ color: "text.primary" }}
                        onClick = {() => setEditNumber(true)}
                        
                      >
                        <EditIcon sx={{ fontSize: 30 , color: "black", width:"1.5rem"}}></EditIcon>
                      </IconButton>User Number</Typography></>)}


        
                      
                      </Box>

                      
 
    </>
  )
}
