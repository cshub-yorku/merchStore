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
import { button_black, button_theme } from "./Styles";
import { fontSize } from "@mui/system";

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',

  width: '25vw',
  height: 'auto',

  boxShadow: 4,
  backgroundColor: "#624F82",
  borderRadius: 2.5,

  mb: '10%'
};
const cardImage = {
  width: '95%',
  height: '95%',
  mx: 'auto',
  mt: '2.5%',
  borderRadius: 2.5,

  boxShadow: 4,

  filter: 'drop-shadow(0px 0px 23px rgba(0, 0, 0, 0.3))',
}

const cardButton = {
  alignItems: 'center',
  height: '60%',
  width: '30%',
  ml: 'auto',
  mr: '5%',
  boxShadow: 4,
  fontSize: '1.8rem',
  fontWeight: 800,
}

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default function CSCard({ productState, data, src, onClick }) {
  //console.log(data)
  const { title, price, description, images } = data;
  return (
    <>
      <Card sx={cardStyle}>
        <Box component='img' src={images[0]} sx={cardImage}></Box>
        <Box display='flex' alignItems='center' sx={{ height: '20hv' }}>
          <Typography variant='subtitle1' sx={{ ml: '3%', lineHeight: 1.2, fontWeight: 800, width: '40%' }}>{title}</Typography>
          <Button
            onClick={() => { onClick(); productState(data) }}
            sx={[button_theme, cardButton]}
            variant="contained"
          >
            C$ {price}
          </Button>
        </Box>
      </Card>
    </>
  );
}

{/* <Box
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
      sx={button_theme}
      variant="contained"
    >
      $C {price}
    </Button>
  </Box>
</CardContent>
</Box> */}