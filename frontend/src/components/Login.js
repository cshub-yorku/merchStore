import React, { useState } from "react";
import { Button, Dialog, DialogContent, Link, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "../styles/LoginSignup.css";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

export default function Login({ trigger, onClick }) {
  const navigate = useNavigate();

  const [switchSignup, setSwtichSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatusMessage, setLoginStatusMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

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
        setLoginStatusMessage("Login successful");
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
          sx: {
            bgcolor: "#1F1E3A",
            width: "40%",
            height: "80%",
            borderRadius: "8px",
          },
        }}
      >
        <div className="outerContainer">
          {switchSignup ? (
            <div>
              <Signup changeToFalse={changeToFalse} />
            </div>
          ) : (
            <DialogContent
              classes={{ root: { m: 0, p: 0 } }}
              sx={{ "&.MuiDialogContent-root": { m: 0, p: 0 } }}
            >
              <div align="center" className="register-sign">
                <h1>Login or Sign up</h1>
                <div className="register-fields">
                  <TextField
                    error={emailError}
                    helperText={
                      emailError ? "Please enter a valid email adress" : ""
                    }
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
                  <TextField
                    inputProps={{ style: { color: "black" } }}
                    color="secondary"
                    margin="normal"
                    className="register-text"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="register-button">
                  <p>{loginStatusMessage}</p>
                  <Button
                    onClick={handleClick}
                    type="submit"
                    color="primary"
                    variant="contained"
                  >
                    Login
                  </Button>
                </div>

                <Typography
                  className="register-link"
                  sx={{ margin: 3, fontSize: "1.2rem" }}
                >
                  {" "}
                  Do you have an account ?
                  <Link
                    onClick={() => setSwtichSignup(true)}
                    sx={{
                      margin: 1,
                      color: "white",
                      fontSize: "1.4rem",
                      fontWeight: "700",
                    }}
                    className="signup-style"
                  >
                    Sign up
                  </Link>
                </Typography>
              </div>
            </DialogContent>
          )}
        </div>
      </Dialog>
    </>
  );
}
