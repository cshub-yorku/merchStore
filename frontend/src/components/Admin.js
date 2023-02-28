import { Box, Typography,Button,IconButton } from '@mui/material';
import React, { useState } from 'react'
import Profile from "./Profile";
import Address from "./Address";
import "../styles/Admin.css";


export default function Admin() {
  return (
    <>
      <Box sx={{width: '80%',
       height: "100%",
       marginTop: '5vw',
       backgroundColor: "#121212",
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

            
      </Box>
    </>
  )
}
