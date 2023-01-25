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
                onClick={()=>{onClick(); /*productState(data)*/}}
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