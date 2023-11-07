import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { button_theme } from "../styles/Styles";
import {
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
  console.log(images);
  const theme = useTheme();
  return (
    <div className="flex p-4 gap-4 flex-col bg-[#624F82] rounded-md">
      <Box
        component="img"
        onClick={() => {
          onClick();
          productState(data);
        }}
        src={
          "https://digital-collage.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F611b7606-d2ed-4c74-aaff-7a4d5c66d365-9w6i5v.jpg&w=2048&q=75"
        }
        sx={cardImage}
      ></Box>

      {/* Product Details */}
      <div className="flex gap-4 h-fit justify-between">
        <div className="space-y-0">
          <p className="text-xl leading-6 font-semibold">
            {name}
            Product name goes here okay? :((
          </p>
          <p className="text-sm font-light">
            Product Type
          </p>
        </div>

        <Button
          onClick={() => {
            onClick();
            productState(data);
          }}
          sx={[button_theme]}
          // variant="contained"
          variant="contained"
          className="h-fit"
        >
            CA${price}
        </Button>
      </div>
    </div>
  );
}
