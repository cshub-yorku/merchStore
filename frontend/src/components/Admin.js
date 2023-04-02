import { Box, Typography,Button,IconButton } from '@mui/material';
import React, { useState } from 'react'
import Profile from "./Profile";
import Address from "./Address";
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

function createData(order, date, ship, total, status) {
  return {order, date, ship, total, status };
}

const rows = [
  createData('1', 1/1/1, "User Name", 24, "Complete"),
  createData('2', 1/1/1, "User Name", 37, "Complete"),
  createData('3', 1/1/1, "User Name", 24, "Complete"),
  createData('4', 1/1/1, "User Name", 67, "Complete"),
  createData('5', 1/1/1, "User Name", 49, "Complete"),
];

export default function Admin() {
  const navigate = useNavigate();
  return (
    <>

    <Typography sx={{fontSize: "1.5rem",
                    fontWeight: "700",
                    margin: "5vw",}} >
                    
                    <IconButton
                      className="navMenu"
                      size="large"
                      edge="start"
                      sx={{ color: "text.primary" }}
                      onClick={ ()=> navigate('/')}
                    >
        <ArrowBackIcon sx={{ fontSize: 40 }}></ArrowBackIcon>
      </IconButton> Back to Shop
    </Typography>

      <Box className="container-admin" sx={{width: '80%',
      height: "45rem",
       marginTop: '5vw',
       backgroundColor: "none",
       
       marginLeft: "10vw",
       marginRight: "auto",
       
       }}>

            <Box className="container-info" sx={{
              display: "flex",
              justifyContent: "space-between",
              
              flexDirection: "row",
              alignItems: "center",
              
              width: '71vw',
              height: "13rem",
              marginLeft: "4vw",
              marginTop: '1vw',
              marginRight: "auto",
             

            }}>
                  <Box className="account-info" sx={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    margin: "5px",
                  }}> Account Details

                      <Profile/>
                      
                    </Box>
                      
                    <Box className="address-info" sx={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    margin: "5px",
                  }}> Address

                      <Address/>
                      
                      </Box>

            

            </Box>

            
            <Box className="container-info" sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
             
              width: '71vw',
              height: "25rem",
              marginLeft: "4vw",
              marginTop: '3vw',
              marginRight: "auto",
             

            }}>
              <Box >
              <Box className="address-info" sx={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    margin: "5px",
                    
                  }}> Order History</Box>
                </Box>
              
              <TableContainer sx= {{color: "black", marginTop:"1rem"}} component={Paper}>
                    <Table sx={{ minWidth: 650 , backgroundColor: "white" }} aria-label="simple table">
                      <TableHead >
                        <TableRow >
                          <TableCell sx= {{color: "black"}}>Order #</TableCell>
                          <TableCell sx= {{color: "black"}} align="right">Date</TableCell>
                          <TableCell sx= {{color: "black"}} align="right">Ship To</TableCell>
                          <TableCell sx= {{color: "black"}} align="right">Order Total</TableCell>
                          <TableCell sx= {{color: "black"}} align="right">Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.order}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: "black"}}
                          >
                            <TableCell component="th" scope="row" sx= {{color: "black"}}>
                              {row.order}
                            </TableCell>
                            <TableCell sx= {{color: "black"}} align="right">{row.date}</TableCell>
                            <TableCell sx= {{color: "black"}} align="right">{row.ship}</TableCell>
                            <TableCell sx= {{color: "black"}} align="right">{row.total}</TableCell>
                            <TableCell sx= {{color: "black"}} align="right">{row.status}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
            </Box>
      </Box>
    </>
  )
}
