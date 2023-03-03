import React from "react";
import {
  Card,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { button_theme } from "../styles/Styles";
import { cardStyle, cardImage, cardTextBox, cardLabel, cardSubtitle, cardButton, cardNav } from "../styles/cardSyles"
import { bold, customFontWeight, fontInter, normal } from "../styles/fontStyles";

export default function CSCard({ productState, data, src, onClick }) {
  console.log(data)
  const { title, price, description, images } = data;
  return (
    <>
      <Card sx={cardStyle}>
        <Box component='img' src={images[0]} sx={cardImage}></Box>
        <Box display='flex' alignItems='center' sx={cardNav}>
          <Box sx={cardTextBox}>
            <Typography variant='h5' sx={[cardLabel, bold, fontInter]}>{title}</Typography>
            <Typography variant='h6' sx={[cardSubtitle, normal, fontInter]}>Type</Typography>
          </Box>
          <Button
            onClick={() => { onClick(); productState(data) }}
            sx={[button_theme, cardButton]}
            variant="contained"
          >
            <Typography variant="h6" fontWeight={600} sx={[fontInter, customFontWeight(600)]}>C$ {price}</Typography>
          </Button>
        </Box>
      </Card>
    </>
  );
}