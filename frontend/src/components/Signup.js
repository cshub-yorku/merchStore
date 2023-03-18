import React, { useState } from "react";
import { Button, Dialog, DialogContent, Link, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "../styles/LoginSignup.css";

export default function Signup({ changeToFalse }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [signUpStatusMessage, setSignUpStatusMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateFirstName = (firstNameValue) => {
    if (
      firstNameValue.length < 2 ||
      firstNameValue.length > 20 ||
      !/^[a-zA-Z]*$/.test(firstNameValue) //Alphabet only
    ) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const validateLastName = (lastNameValue) => {
    if (
      lastNameValue.length > 20 ||
      !/^[a-zA-Z]*$/.test(lastNameValue) //Alphabet only
    ) {
      setLastNameError(true);
    } else if (lastNameValue == "") {
      setLastNameError(false);
    } else {
      setLastNameError(false);
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
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

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (
      firstNameError ||
      lastNameError ||
      phoneNumberError ||
      emailError ||
      passwordError
    ) {
      setSignUpStatusMessage(
        "Sign up was unsuccessful, please check the input fields"
      );
      return;
    }

    const user = { email, password, firstName, lastName, phoneNumber };
    fetch("http://localhost:9000/v1/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sign up was unsuccessful!");
        }
        setSignUpStatusMessage("Sign up successful!");
      })
      .catch((error) => {
        setSignUpStatusMessage(error.message);
      });
  };

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
            alignItems: "center",
          },
        }}
      >
        <div align="center" style={{ marginTop: "2%" }}>
          <h1>Create Account</h1>

          <div className="register-sign-fields">
            <TextField
              error={firstNameError}
              helperText={
                firstNameError ? "Please enter a valid first name." : ""
              }
              inputProps={{
                style: { color: "black" },
                required: true,
              }}
              margin="normal"
              className="register-text signup-text"
              label="First Name"
              variant="outlined"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                validateFirstName(e.target.value);
              }}
            />
            <TextField
              error={lastNameError}
              helperText={
                lastNameError ? "Please enter a valid last name." : ""
              }
              inputProps={{ style: { color: "black" } }}
              color="secondary"
              margin="normal"
              className="register-text signup-text"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                validateLastName(e.target.value);
              }}
            />
            <TextField
              error={phoneNumberError}
              helperText={
                phoneNumberError ? "Please enter a valid phone number." : ""
              }
              inputProps={{ style: { color: "black" } }}
              color="secondary"
              margin="normal"
              className="register-text signup-text"
              label="Phone Number"
              variant="outlined"
              required
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                validatePhoneNumber(e.target.value);
              }}
            />
            <TextField
              error={emailError}
              helperText={emailError ? "Please enter a valid email." : ""}
              inputProps={{ style: { color: "black" } }}
              color="secondary"
              margin="normal"
              className="register-text signup-text"
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
              error={passwordError}
              helperText={
                passwordError
                  ? "Password should have at least one digit, lowercase letter, uppercase letter, special character, and is at least 8 characters long"
                  : ""
              }
              inputProps={{ style: { color: "black" } }}
              color="secondary"
              margin="normal"
              className="register-text signup-text"
              label="Password"
              variant="outlined"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
          </div>

          <div className="register-button">
            <p>{signUpStatusMessage}</p>
            <Button
              type="submit"
              variant="contained"
              onClick={handleClick}
              sx={{
                margin: 1,
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "700",
              }}
            >
              Sign up
            </Button>
          </div>
          <div
            onClick={() => changeToFalse()}
            style={{
              marginTop: 5,
              marginBottom: -1,
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "700",
            }}
          >
            {" "}
            Sign in{" "}
          </div>
        </div>
      </DialogContent>
      {/* </Dialog> */}
    </>
  );
}
