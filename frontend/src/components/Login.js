import React from 'react'
import { Button, Dialog, DialogContent, Link, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import "../styles/LoginSignup.css"
import { useNavigate } from "react-router-dom"




export default function Login({ trigger, onClick }) {
  const navigate = useNavigate();

  return (
    
    <>
        <Dialog
            open={trigger}
            maxWidth="xl"
            fullWidth
            onClose={onClick}
            PaperProps={{
                sx: {
                bgcolor: "#1F1E3A",
                width: "30%",
                height: "60%",
                borderRadius: "8px",
                },
            }}
            >
            <DialogContent
                classes={{ root: { m: 0, p: 0 } }}
                sx={{ "&.MuiDialogContent-root": { m: 0, p: 0 } }}
            >
              <div align="center" className='register-sign'>
                  <h1>Login or Sign up</h1>
                  <div className='register-fields'>
                    <TextField color="secondary" margin='normal' className='register-text' label="Email Address" variant="outlined"  required/>
                    <TextField color="secondary" margin='normal' className='register-text' label="Password" variant="outlined"  type='password'  required/>
                  </div>
                  <div className='register-button' >
                    <Button onClick={ ()=> navigate('./admin')} type='submit' color="primary" variant='contained' >Login</Button>
                  </div>

                  <Typography className='register-link' sx={{margin:3,fontSize: "1.2rem"}}> Do you have an account ?
                    <Link onClick={ ()=> navigate('./signup')} sx={{margin:1, color: "white", fontSize: "1.2rem", fontWeight: "700" }} className="signup-style">
                       Sign up
                    </Link>
                  </Typography> 

                  

              </div>
            </DialogContent>
        </Dialog>
    </>
  )
}
