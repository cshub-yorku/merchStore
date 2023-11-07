import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const token = new URLSearchParams(useLocation().search).get("token");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const data = { password };
    fetch(`http://localhost:9000/v1/users/reset/password?token=${token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error occurred while resetting the password.");
        }
        setMessage("Password has been reset successfully. Please Login again!");
        setTimeout(() => {
          localStorage.removeItem("token");
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setMessage("Failed to reset the password.");
      });
  };

  return (
    <div align="center" className="register-sign">
      <h1>Reset Password</h1>
      <div className="register-fields">
        <TextField
          error={passwordError}
          helperText={
            passwordError
              ? "Password should have at least one digit, lowercase letter, uppercase letter, special character, and is at least 8 characters long"
              : ""
          }
          InputLabelProps={{
            style: { color: "white" },
          }}
          inputProps={{ style: { color: "white" } }}
          color="primary"
          margin="normal"
          className="register-text"
          label="New Password"
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

      <div className="reset-password-button">
        <p>{message}</p>
        <Button
          onClick={handleResetPassword}
          type="submit"
          color="primary"
          variant="contained"
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
}
