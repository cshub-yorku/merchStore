import React from 'react'
import { Button, Dialog, DialogContent, Link, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import "../styles/LoginSignup.css"




export default function Login({ trigger, onClick }) {
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
                  <div className='register-button'>
                    <Button  type='submit' color="primary" variant='contained' >Login</Button>
                  </div>

                  <Typography className='register-link'> Do you have an account ?
                    <Link href='#'>
                       Sign up
                    </Link>
                  </Typography> 

                  

              </div>
            </DialogContent>
        </Dialog>
    </>
  )
}
