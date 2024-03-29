import React, { useState } from "react";
import { Box, Button, Dialog, DialogContent, Link, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import { signUpSwitch, dialogPaperStyle, forgotPasswordStyle, forgotPasswordLink, haveAccount, signupSwitch, marginPaddingZero, registerText, signupText, inputFieldsTextColor, registerFields, registerButton, registerLink, registerSignFields, registerSign, signupStyle } from '../styles/LoginSignupStyles';

export default function Login({ trigger, onClick }) {
  const navigate = useNavigate();

  const [switchSignup, setSwtichSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatusMessage, setLoginStatusMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const changeToFalse = () => {
    setSwtichSignup(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (emailError) {
      setLoginStatusMessage(
        "Unsuccessful login, please check the input fields!"
      );
      return;
    }
    const user = { email, password };
    fetch("http://localhost:9000/v1/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        setLoginStatusMessage("Login successful");
        setEmail("");
        setPassword("");
        onClick();
        setTimeout(() => {
          setLoginStatusMessage("");
        }, 3000);
      })
      .catch((error) => {
        if (error.message === "Unexpected end of JSON input") {
          setLoginStatusMessage("Wrong email or password, please try again!");
        } else {
          setLoginStatusMessage(error.message);
        }
      });
  };

  return (
    <>
      <Dialog
        open={trigger}
        maxWidth="xl"
        fullWidth
        onClose={onClick}
        PaperProps={{
          sx: dialogPaperStyle,
        }}
      >
        <Box>
          {switchSignup ? (
            <Box>
              <Signup changeToFalse={changeToFalse} />
            </Box>
          ) : showForgotPassword ? (
            <Box>
              <ForgotPassword onClose={() => setShowForgotPassword(false)} />
            </Box>
          ) : (
            <DialogContent
              classes={{ root: marginPaddingZero }}
              sx={{ "&.MuiDialogContent-root": marginPaddingZero}}
            >
              <Box align="center" sx={registerSign} >
                <Typography variant="h1">Login or Sign up</Typography>
                <Box sx={registerFields}>
                  <TextField
                    error={emailError}
                    helperText={
                      emailError ? "Please enter a valid email adress" : ""
                    }
                    inputProps={{ style: inputFieldsTextColor }}
                    color="secondary"
                    margin="normal"
                    sx={registerText}
                    label="Email Address"
                    variant="outlined"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                  />
                  <TextField
                    inputProps={{ style: inputFieldsTextColor }}
                    color="secondary"
                    margin="normal"
                    sx={registerText}
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Box>

                <Box>
                  <Box>{loginStatusMessage}</Box>
                  <Button
                    onClick={handleClick}
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={registerButton}
                  >
                    Login
                  </Button>
                </Box>
                <Typography
                  sx={forgotPasswordLink}
                >
                  <Link
                    onClick={() => setShowForgotPassword(true)}
                    sx={forgotPasswordStyle}
                  >
                    Forgot Password?
                  </Link>
                </Typography>

                <Typography
                  sx={haveAccount}
                >
                  {" "}
                  Do you have an account ?
                  <Link
                    onClick={() => setSwtichSignup(true)}
                    sx={signUpSwitch}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </DialogContent>
          )}
        </Box>
      </Dialog>
    </>
  );
}
