import "../styles/CSCard.css";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import ProductPopup from "./ProductPopup";

const cardStyle = {
  display: "flex",
  flexDirection: "row",

  width: "33vw",
  height: "44vh",

  boxShadow: 0,
  backgroundColor: "#624F82",
  borderRadius: 4,
};

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default function CSCard({ data, src, onClick }) {
  // console.log(data)
  const { title, price, description, images } = data;
  return (
    <>
      <Card sx={cardStyle}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          <Box sx={center}>
            <Box
              sx={{
                paddingLeft: "6px",
                width: "98%",
                height: "98%",
                borderRadius: 4,
              }}
              component="img"
              src={images[0]}
            ></Box>
          </Box>
          <CardContent
            sx={{ display: "grid", gridAutoRows: "auto", padding: "1.5rem" }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "text.primary",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body"
                sx={{ color: "#B0B0B0", fontSize: "1.25rem" }}
              >
                {description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={()=>{onClick(); productState(data)}}
                sx={{
                  padding: "1rem",
                  fontSize: "1.15rem",
                  backgroundColor: "#2C3555",
                  minWidth: "128px",
                }}
                variant="contained"
              >
                $C {price}
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
