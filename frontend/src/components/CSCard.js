import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import { button_theme } from "../styles/Styles";
import {
  cardStyle,
  cardImage,
  cardTextBox,
  cardLabel,
  cardSubtitle,
  cardButton,
  cardNav,
} from "../styles/cardSyles";
import {
  bold,
  customFontWeight,
  fontInter,
  normal,
} from "../styles/fontStyles";
import { useTheme } from "@emotion/react";

export default function CSCard({ productState, data, src, onClick }) {
  const { name, price, description, images } = data;
  const theme = useTheme();
  return (
    <>
      <Card sx={cardStyle} onClick={() => { onClick(); productState(data) }}>
        <Box component='img'  src={images[0]} sx={cardImage}></Box>
        <Box display='flex' flexDirection='column' alignItems='center' sx={cardNav(theme)}>
          <Box sx={cardTextBox}>
            <Typography variant='h5' sx={[cardLabel, bold, fontInter]}>{name}</Typography>
            <Typography variant='body1' sx={[cardSubtitle, normal, fontInter]}>Type</Typography>
          </Box>
          <Box
            // onClick={() => { onClick(); productState(data) }}
            sx={[cardButton]}
            variant="contained"
          >
            <Typography variant="h6" fontWeight={600} sx={[fontInter, customFontWeight(600)]}>C$ {price}</Typography>
          </Box>
        </Box>
        <Button
          onClick={() => {
            onClick();
            productState(data);
          }}
          sx={[button_theme, cardButton]}
          variant="contained"
        >
          <Typography
            variant="h6"
            fontWeight={600}
            sx={[fontInter, customFontWeight(600)]}
          >
            C$ {price}
          </Typography>
        </Button>
      </Box>
    </div>
  );
}
