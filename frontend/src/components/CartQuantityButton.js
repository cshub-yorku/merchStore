import {
    Dialog,
    DialogContent,
    IconButton,
    List,
    ListItem,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    Popover,
    ButtonGroup,
    Button,
  } from "@mui/material";
  import { Box, Stack } from "@mui/system";
  import React, { useContext, useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import { useTheme } from "@emotion/react";
  import {
    button_black,
    toggle_button_black,
    PopoverStyle,
  } from "../styles/Styles";
  import {
    closeButton,
    helperNotation,
    PopoverText,
    productBuy,
    productBuyButton,
    productMain,
    productMainImage,
    ProductPopover,
    productPriceBox,
    productPriceText,
    productSubImage,
    SizeButtonGroup,
    ToggleButtonSeparations,
  } from "../styles/ProductPopupStyles";
  import { bold, fontJura, medium, themeColor } from "../styles/fontStyles";
  import { useNavigate } from "react-router";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';




export default function CartQuantityButton({quantity, setDecrease, setIncrease}){
    

    return (
        <Box sx={{ marginBottom: "1rem" , transform: "scale(80%)", marginLeft: "-11%" }}>
            <ToggleButtonGroup>
              <ToggleButton
                sx={toggle_button_black}onClick={() => setDecrease()}>
                    <IconButton
                                        size="medium"
                                        edge="start"
                                        sx={{ color: "text.primary",
                                        }}
                                        >
                                    <RemoveIcon fontSize="large"></RemoveIcon>
                    </IconButton>
              </ToggleButton>

              <ToggleButton
                sx={[toggle_button_black, ToggleButtonSeparations]}
              >
                <Typography variant="h6">{quantity}</Typography>
              </ToggleButton>

              <ToggleButton
                sx={toggle_button_black}onClick={() => setIncrease()}>
                    <IconButton
                                        size="medium"
                                        edge="start"
                                        sx={{ color: "text.primary",
                                        }}
                                        >
                                    <AddIcon fontSize="large"></AddIcon>
                    </IconButton>
              </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}
