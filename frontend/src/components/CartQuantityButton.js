import {
    IconButton,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
  } from "@mui/material";
  import { Box, Stack } from "@mui/system";
  import React, { useContext, useState } from "react";
  import {
    toggle_button_black,
  } from "../styles/Styles";
  import {
    ToggleButtonSeparations,
  } from "../styles/ProductPopupStyles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { bold, fontJura, medium, themeColor } from "../styles/fontStyles";
import { useTheme } from "@emotion/react";




export default function CartQuantityButton(){
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();
  
  const setDecrease = () => {
    quantity > 1 ? setQuantity(prev => prev - 1) : setQuantity(1);
  };

  //can be set to the stock limit from the backend. temp value for now.
  const stocklimit = 10;

  const setIncrease = () => {
    quantity < stocklimit ? setQuantity(prev => prev + 1) : setQuantity(stocklimit);
  };

    return (
        <Box sx={{ marginBottom: "1rem" , transform: "scale(80%)", marginLeft: "-11%",
        [theme.breakpoints.down('mobile')]: {
          transform: "scale(70%)", marginLeft: "-17%"
      }, }}>
            <Typography variant="h6" sx={[medium, fontJura, {my: '2%'}]}>Quantity</Typography>
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
