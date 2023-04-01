import { useState } from "react";
import { Button, TextField, Typography, Link } from "@mui/material";

export default function ForgotPassword({ onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (emailError) {
      alert("please check the input fields");
    } else {
      setMessage("Password reset instructions have been sent to your email.");
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
    <div align="center" className="register-sign">
      <h1>Forgot Password</h1>
      <div className="register-fields">
        <TextField
          error={emailError}
          helperText={emailError ? "Please enter a valid email." : ""}
          inputProps={{ style: { color: "black" } }}
          color="secondary"
          margin="normal"
          className="register-text"
          label="Email Address"
          variant="outlined"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
      </div>

      <div className="forgot-password-button">
        <p>{message}</p>
        <Button
          onClick={handleForgotPassword}
          type="submit"
          color="primary"
          variant="contained"
        >
          Reset Password
        </Button>
      </div>

      <Typography
        className="back-to-login-link"
        sx={{ margin: 3, fontSize: "1.2rem" }}
      >
        <Link
          onClick={onClose}
          sx={{ color: "white", fontSize: "1rem", fontWeight: "500" }}
        >
          Back to Login
        </Link>
      </Typography>
    </div>
  );
}
