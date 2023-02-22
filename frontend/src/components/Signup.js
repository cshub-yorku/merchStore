import React from 'react'
import { Button, Dialog, DialogContent, Link, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import "../styles/LoginSignup.css"

export default function Signup({changeToFalse}) {
  return (
    <>
        {/* <Dialog
            maxWidth="xl"
            fullWidth
            PaperProps={{
                sx: {
                bgcolor: "#1F1E3A",
                width: "30%",
                height: "60%",
                borderRadius: "8px",
                },
            }}
            > */}
            <DialogContent
                classes={{ root: { m: 0, p: 0 } }}
                sx={{ "&.MuiDialogContent-root": { m: 0, p: 0 } }}
                maxWidth="xl"
                fullWidth
                PaperProps={{
                    sx: {
                    bgcolor: "#1F1E3A",
                    width: "30%",
                    height: "60%",
                    borderRadius: "8px",
                    alignItems: "center"
                    },
                }}
            >
            <div align="center" style = {{marginTop:"2%"}}>
             <h1>Create Account</h1>
             
                  <div className='register-sign-fields'>
                    <TextField color="secondary" margin='normal' className='register-text signup-text' label="First Name" variant="outlined"  required/>
                    <TextField color="secondary" margin='normal' className='register-text signup-text' label="Last Name" variant="outlined"  required/>
                    <TextField color="secondary" margin='normal' className='register-text signup-text' label="Email Address" variant="outlined"  required/>
                    <TextField color="secondary" margin='normal' className='register-text signup-text' label="Password" variant="outlined"  type='password'  required/>
                  </div>

                  <div className='register-button'>
                    <Button  type='submit'  variant='contained' sx={{margin:1, color: "white", fontSize: "1.2rem", fontWeight: "700" }} >Sign up</Button>
                  </div>
                  <div onClick={() => changeToFalse()} style={{marginTop:5, marginBottom: -1, color: "white", fontSize: "1.2rem", fontWeight: "700" }}> Go Back </div>
            </div>
              
            </DialogContent>
        {/* </Dialog> */}
    </>
  )
}
