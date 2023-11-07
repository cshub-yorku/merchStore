import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Link,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import {
  signUpSwitch,
  dialogPaperStyle,
  forgotPasswordStyle,
  forgotPasswordLink,
  haveAccount,
  signupSwitch,
  marginPaddingZero,
  registerText,
  signupText,
  inputFieldsTextColor,
  registerFields,
  registerButton,
  registerLink,
  registerSignFields,
  registerSign,
  signupStyle,
} from "../styles/LoginSignupStyles";
import { useTheme } from "@emotion/react";
import Input from "./Input";

export default function Login({ trigger, onClick }) {
  const navigate = useNavigate();
  const theme = useTheme();

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
    <Dialog
      open={trigger}
      fullScreen={true}
      onClose={onClick}
      PaperProps={{
        sx: dialogPaperStyle(theme),
      }}
      className="backdrop-blur-sm"
    >
      {switchSignup ? (
        <Signup changeToFalse={changeToFalse} />
      ) : showForgotPassword ? (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      ) : (
        <DialogContent
          classes={{ root: marginPaddingZero }}
          sx={{ "&.MuiDialogContent-root": marginPaddingZero }}
          className="grid md:w-[500px] place-items-center"
        >
          <div className="w-full gap-4 my-auto flex flex-col justify-center items-center">
            <h2 className="text-3xl pt-6 pb-2 font-semibold tracking-wide md:text-4xl">
              Welcome Back
            </h2>
            <hr className="border-[#282A4E] border-opacity-90 w-full" />
            <div className="w-full px-4 space-y-2">
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                error={emailError}
                label="Email"
                type="email"
              />
              <Input
                label="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <TextField
                  className=""
                  error={emailError}
                  helperText={
                    emailError ? "Please enter a valid email address" : ""
                  }
                  inputProps={{ style: inputFieldsTextColor }}
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
                /> */}
              {/* <TextField
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
                /> */}
            </div>

            <div className="w-full px-4">
              <Box>{loginStatusMessage}</Box>
              <Button
                onClick={handleClick}
                type="submit"
                variant="contained"
                className="w-full"
                sx={registerButton}
              >
                Login
              </Button>
            </div>
            <Link
              className="cursor-pointer"
              onClick={() => setShowForgotPassword(true)}
              sx={forgotPasswordStyle}
            >
              Forgot Password?
            </Link>

            <hr className="border-[#282A4E] border-opacity-90 w-full" />

            <p className="pb-6 text-zinc-400">
              New to the MerchStore?{" "}
              <Link onClick={() => setSwtichSignup(true)} sx={signUpSwitch}>
                Sign up
              </Link>
            </p>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
