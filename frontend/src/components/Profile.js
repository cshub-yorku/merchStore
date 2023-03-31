import { Box, Typography, Button, IconButton, Input } from "@mui/material";
import React, { useState } from "react";
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

export default function Profile({ userDetails }) {
  const navigate = useNavigate();

  let userID = userDetails.userId;
  let active = userDetails.active;
  const [firstName, setFirstName] = useState(userDetails.firstName);
  const [lastName, setLastName] = useState(userDetails.lastName);
  const [email, setEmail] = useState(userDetails.email);
  const [phoneNumber, setPhoneNumber] = useState(userDetails.phoneNumber);

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editNumber, setEditNumber] = useState(false);

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
                  updateUserDetails();
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
                value={firstName || ""}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                sx={{
                  border: "1px solid black",
                  borderRadius: "8px",
                  color: "black",
                }}
                value={lastName || ""}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Button
                onClick={() => setEditName(false)}
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
                value={email || ""}
                onChane={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={() => setEditEmail(false)}
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
                onClick={() => setEditNumber(false)}
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
