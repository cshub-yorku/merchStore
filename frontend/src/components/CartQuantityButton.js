import {
  IconButton,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import { toggle_button_black } from "../styles/Styles";
import { ToggleButtonSeparations } from "../styles/ProductPopupStyles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { bold, fontJura, medium, themeColor } from "../styles/fontStyles";

export default function CartQuantityButton({ quantity, setQuantity }) {
  // const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : setQuantity(1);
  };

  //can be set to the stock limit from the backend. temp value for now.
  const stocklimit = 10;

  const setIncrease = () => {
    quantity < stocklimit
      ? setQuantity((prev) => prev + 1)
      : setQuantity(stocklimit);
  };

  return (
    <ToggleButtonGroup className="w-full h-10">
      <ToggleButton sx={toggle_button_black} onClick={() => setDecrease()}>
        <IconButton
          size="small"
          edge="start"
          sx={{
            color: "text.primary",
          }}
        >
          <RemoveIcon fontSize="small"></RemoveIcon>
        </IconButton>
      </ToggleButton>

      <ToggleButton sx={[toggle_button_black, ToggleButtonSeparations]}>
        <Typography variant="h6">{quantity}</Typography>
      </ToggleButton>

      <ToggleButton sx={toggle_button_black} onClick={() => setIncrease()}>
        <IconButton
          size="small"
          edge="start"
          sx={{
            color: "text.primary",
          }}
        >
          <AddIcon fontSize="small"></AddIcon>
        </IconButton>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
