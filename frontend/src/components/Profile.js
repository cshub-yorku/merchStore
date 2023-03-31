import { Box, Typography, Button, IconButton, Input } from "@mui/material";
import { React, useState, useEffect } from "react";
import "../styles/Admin.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function Profile({ userDetails, onUpdate }) {
  const navigate = useNavigate();

  let userID = userDetails.userId;
  let active = userDetails.active;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editNumber, setEditNumber] = useState(false);

  useEffect(() => {
    if (userDetails) {
      setFirstName(userDetails.firstName);
      setLastName(userDetails.lastName);
      setEmail(userDetails.email);
      setPhoneNumber(userDetails.phoneNumber);
    }
  }, [userDetails]);

  const updateUserDetails = () => {
    const token = localStorage.getItem("token");

    const updatedUser = {
      active: active,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      userId: userID,
    };

    console.log(updatedUser);

    fetch("http://localhost:9000/v1/users/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (response.ok) {
          console.log("User details updated successfully");
          onUpdate();
        } else {
          throw new Error("Error updating user details");
        }
      })
      .catch((error) => {
        console.error(error.message);
        alert(error.message);
      });
  };

  return (
    <>
      <Box
        sx={{
          width: "20vw",
          height: "10rem",
          backgroundColor: "white",
          border: "none",
          borderRadius: "8px",
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        {editName ? (
          <>
            {" "}
            <Box sx={{ marginLeft: "4rem" }}>
              <Typography
                sx={{ color: "black" }}
                onClick={() => {
                  setEditName(false);
                }}
              >
                <IconButton
                  className="navMenu"
                  size="large"
                  edge="start"
                  sx={{ color: "text.primary" }}
                  onClick={() => setEditName(false)}
                >
                  <ArrowBackIcon
                    sx={{ fontSize: 25, color: "black" }}
                  ></ArrowBackIcon>
                </IconButton>
                GO BACK
              </Typography>
              <Input
                sx={{
                  border: "1px solid black",
                  borderRadius: "8px",
                  color: "black",
                }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                sx={{
                  border: "1px solid black",
                  borderRadius: "8px",
                  color: "black",
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Button
                onClick={() => {
                  updateUserDetails();
                  setEditName(false);
                }}
                sx={{
                  backgroundColor: "#121212",
                  color: "white",
                  margin: "1rem",
                }}
              >
                EDIT
              </Button>
            </Box>
          </>
        ) : editEmail ? (
          <>
            <Box sx={{ marginLeft: "4rem" }}>
              <Typography
                sx={{ color: "black" }}
                onClick={() => setEditEmail(false)}
              >
                <IconButton
                  className="navMenu"
                  size="large"
                  edge="start"
                  sx={{ color: "text.primary" }}
                  onClick={() => setEditEmail(false)}
                >
                  <ArrowBackIcon
                    sx={{ fontSize: 25, color: "black" }}
                  ></ArrowBackIcon>
                </IconButton>
                GO BACK
              </Typography>
              <Input
                sx={{
                  border: "1px solid black",
                  borderRadius: "8px",
                  color: "black",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={() => {
                  updateUserDetails();
                  setEditEmail(false);
                }}
                sx={{
                  backgroundColor: "#121212",
                  color: "white",
                  margin: "1rem",
                }}
              >
                EDIT
              </Button>
            </Box>
          </>
        ) : editNumber ? (
          <>
            <Box sx={{ marginLeft: "4rem" }}>
              <Typography
                sx={{ color: "black" }}
                onClick={() => setEditNumber(false)}
              >
                <IconButton
                  className="navMenu"
                  size="large"
                  edge="start"
                  sx={{ color: "text.primary" }}
                  onClick={() => setEditNumber(false)}
                >
                  <ArrowBackIcon
                    sx={{ fontSize: 25, color: "black" }}
                  ></ArrowBackIcon>
                </IconButton>
                GO BACK
              </Typography>
              <Input
                sx={{
                  border: "1px solid black",
                  borderRadius: "8px",
                  color: "black",
                }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button
                onClick={() => {
                  updateUserDetails();
                  setEditEmail(false);
                }}
                sx={{
                  backgroundColor: "#121212",
                  color: "white",
                  margin: "1rem",
                }}
              >
                EDIT
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
                paddingLeft: "1rem",
                // paddingTop: "2px",
                color: "black",
                // fontFamily: "IBM Plex Sans"
              }}
            >
              <IconButton
                className="navMenu"
                size="large"
                edge="start"
                sx={{ color: "text.primary" }}
                onClick={() => setEditName(true)}
              >
                <EditIcon
                  sx={{ fontSize: 30, color: "black", width: "1.5rem" }}
                ></EditIcon>
              </IconButton>
              {`${userDetails.firstName} ${userDetails.lastName}`}
            </Typography>

            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
                paddingLeft: "1rem",
                // paddingTop: "4px",
                color: "black",
                // fontFamily: "IBM Plex Sans"
              }}
            >
              <IconButton
                className="navMenu"
                size="large"
                edge="start"
                sx={{ color: "text.primary" }}
                onClick={() => setEditEmail(true)}
              >
                <EditIcon
                  sx={{ fontSize: 30, color: "black", width: "1.5rem" }}
                ></EditIcon>
              </IconButton>
              {userDetails.email}
            </Typography>

            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
                paddingLeft: "1rem",
                // paddingTop: "4px",
                color: "black",
                // fontFamily: "IBM Plex Sans"
              }}
            >
              <IconButton
                className="navMenu"
                size="large"
                edge="start"
                sx={{ color: "text.primary" }}
                onClick={() => setEditNumber(true)}
              >
                <EditIcon
                  sx={{ fontSize: 30, color: "black", width: "1.5rem" }}
                ></EditIcon>
              </IconButton>
              {userDetails.phoneNumber}
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}
