import { Box, Typography, Button, IconButton } from "@mui/material";
import { React, useState, useEffect } from "react";
import Profile from "./Profile";
import Address from "./Address";
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

import { useTheme } from "@emotion/react";
import {

  AdminSwitch,
} from "../styles/Styles";



function createData(order, date, ship, total, status) {
  return { order, date, ship, total, status };
}

const rows = [
  createData("1", "30/09/23", "John Doe", "x1 CSHUB Shirt", "Cancelled"),
  createData("2", "30/09/23", "Rick Astley", "x2 CSHUB Sweater", "Completed"),
  createData("3", "30/09/23", "Bob Mcverylonglastname", "x2 CSHUB Sweater", "Pending")
];

export default function Admin() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState("");
  const [hasError, setHasError] = useState(false);
  const theme = useTheme();
  const fetchUserDetails = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:9000/v1/users/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching user details");
        }
      })
      .then((userDetails) => {
        console.log(userDetails);
        setUserDetails(userDetails);
        setHasError(false);
      })
      .catch((error) => {
        console.error(error.message);
        setHasError(true);
      });
  };

  const updateUserDetailsFromServer = async () => {
    const updatedUserDetails = await fetchUserDetails();
    setUserDetails(updatedUserDetails);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const logoutAndRedirect = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (hasError) {
      setTimeout(() => {
        logoutAndRedirect();
      }, 3000);
    }
  }, [hasError, navigate]);

  return (
    <>
      <Typography sx={{ fontSize: "1.5rem", fontWeight: "700", margin: "5vw" , marginBottom: "8vh"}}>
        <IconButton
          className="navMenu"
          size="large"
          edge="start"
          sx={{ color: "text.primary" }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon sx={{ fontSize: 40 }}></ArrowBackIcon>
        </IconButton>{" "}
        Back to Shop
      </Typography>

      <Box
        className="container-admin"
        sx={{
          width: "80%",
          height: "45rem",
          marginTop: "5vw",
          backgroundColor: "none",

          marginLeft: "10vw",
          marginRight: "auto",
        }}
      >
        <Box
          className="container-info"
          sx={{
            display: "flex",
            justifyContent: "space-between",

            flexDirection: "row",
            alignItems: "center",

            width: "71vw",
            height: "13rem",
            marginLeft: "4vw",
            marginTop: "1vw",
            marginRight: "auto",
            
          }}
        >




          <Box
            className="account-info"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              margin: "5px",
              

          [theme.breakpoints.down('mobile')]: {
            textAlign: "center"
          },
              
            }}
          >
            Account Details
            {!hasError && userDetails && (
              <Profile
                userDetails={userDetails}
                onUpdate={updateUserDetailsFromServer}
              />
            )}
            {hasError && (
              <Typography variant="body1" color="error">
                Please log in again, you are being redirected to the main
                page...
              </Typography>
            )}
          </Box>

          {/* <Box
            className="address-info"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              margin: "5px",
            }}
          >
            {" "}
            Address
            <Address />
          </Box> */}
        </Box>

        <Box
          className="container-info"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            width: "71vw",
            height: "25rem",
            marginLeft: "4vw",
            marginTop: "5vw",
            marginRight: "auto",
            [theme.breakpoints.down('mobile')]: {
              marginTop: "15vw",
            },
            [theme.breakpoints.between('mobile', 'tablet')]: {
              marginTop: "10vw",
            },
          }}
        >
          <Box>
            <Box
              className="address-info"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "700",
                margin: "5px",
                
              }}
            >
              {" "}
              Order History
            </Box>
          </Box>

          <TableContainer
            sx={{ color: "black", marginTop: "1rem",}}
            component={Paper}
          >
            <Table
              sx={{ minWidth: 650, backgroundColor: "white" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "black" }}>Order #</TableCell>
                  <TableCell sx={{ color: "black" }} align="right">
                    Date
                  </TableCell>
                  <TableCell sx={{ color: "black" }} align="right">
                    Ship To
                  </TableCell>
                  <TableCell sx={{ color: "black" }} align="right">
                    Order Total
                  </TableCell>
                  <TableCell sx={{ color: "black" }} align="right">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.order}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      color: "black",
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "black" }}
                    >
                      {row.order}
                    </TableCell>
                    <TableCell sx={{ color: "black" }} align="right">
                      {row.date}
                    </TableCell>
                    <TableCell sx={{ color: "black" }} align="right">
                      {row.ship}
                    </TableCell>
                    <TableCell sx={{ color: "black" }} align="right">
                      {row.total}
                    </TableCell>
                    <TableCell sx={{ color: "black" }} align="right">
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}