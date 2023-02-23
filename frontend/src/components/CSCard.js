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
import { button_black, button_theme } from "../styles/Styles";
import { fontSize } from "@mui/system";
import { cardStyle, cardImage, cardTextBox, cardLabel, cardSubtitle, cardButton, cardNav } from "../styles/cardSyles"

export default function CSCard({ productState, data, src, onClick }) {
  //console.log(data)
  const { title, price, description, images } = data;
  return (
    <>
      <Card sx={cardStyle}>
        <Box component='img' src={images[0]} sx={cardImage}></Box>
        <Box display='flex' alignItems='center' sx={cardNav}>
          <Box sx={cardTextBox}>
            <Typography variant='h5' sx={cardLabel}>{title}</Typography>
            <Typography variant='h6' sx={cardSubtitle}>Type</Typography>
          </Box>
          <Button
            onClick={() => { onClick(); productState(data) }}
            sx={[button_theme, cardButton]}
            variant="contained"
          >
            <Typography variant="h6" fontWeight={600}>C$ {price}</Typography>
          </Button>
        </Box>
      </Card>
    </>
  );
}