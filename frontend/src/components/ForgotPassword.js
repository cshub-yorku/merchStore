import { useState } from "react";
import { signUpSwitch, dialogPaperStyle, forgotPasswordStyle, forgotPasswordLink, haveAccount, signupSwitch, marginPaddingZero, registerText, signupText, register, registerFields, registerButton, registerLink, registerSignFields, registerSign, signupStyle } from '../styles/LoginSignupStyles';
import { Box, Button, TextField, Typography, Link } from "@mui/material";

export default function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (emailError) {
      alert("please check the input fields");
    } else {
      fetch(`http://localhost:9000/v1/users/reset/request?email=${email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("An error occurred while sending the reset email.");
          }
          setMessage(
            "Password reset instructions have been sent to your email."
          );
        })
        .catch((error) => {
          setMessage(error);
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <Box align="center" sx={registerSign}>
      <h1>Forgot Password</h1>
      <Box sx={registerFields}>
        <TextField
          error={emailError}
          helperText={emailError ? "Please enter a valid email." : ""}
          inputProps={{ style: { color: "black" } }}
          color="secondary"
          margin="normal"
          sx={{borderRadius: '8px', backgroundColor: 'white'}}
          label="Email Address"
          variant="outlined"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
      </Box>

      <Box className="forgot-password-button">
        <p>{message}</p>
        <Button
          onClick={handleForgotPassword}
          type="submit"
          color="primary"
          variant="contained"
        >
          Reset Password
        </Button>
      </Box>

      <Typography
        className="back-to-login-link"
        sx={haveAccount}
      >
        <Link
          onClick={onClose}
          sx={forgotPasswordStyle}
        >
          Back to Login
        </Link>
      </Typography>
    </Box>
  );
}
