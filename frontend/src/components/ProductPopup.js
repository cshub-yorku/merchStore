import {
  Grid, 
  ButtonGroup, 
  Divider, 
  Button,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  ImageList,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import { Box, Stack, display, palette } from "@mui/system";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { button_black, select_menu_black, select_black } from "../styles/Styles";

const Pic = styled(Box)({
  width: "25%",
  borderRadius: 4,

  '&:hover': {
    border: '1px solid',
    borderColor: '#FFF',
  }
});

export default function ProductPopup({ trigger, onClick, product, cart, setCart }) {
  const theme = useTheme();
  const mainPic = 0;
  const [pic, setPic] = useState(mainPic);
  const cartHandler = () => {
    if (cart.length < 1) {
      setCart([product]);
    } else {
      setCart(outdatedCart => {
        for (let i = 0; i < outdatedCart.length; i++) {
          if (outdatedCart[i].id === product.id) {
            return outdatedCart;
          }
        }
        return [...outdatedCart, product]
      })
    }
  }
  return (product ?
    <Dialog
      open={trigger}
      maxWidth="xl"
      fullWidth
      onClose={onClick}
      PaperProps={{
        sx: {
          bgcolor: "background",
          width: "62%",
          height: "72%",
          borderRadius: "2px",
        },
      }}
    >
      <DialogContent
        classes={{ root: { m: 0, p: 0 } }}
        sx={{ "&.MuiDialogContent-root": { m: 0, p: 0 } }}
      >
        <Stack direction="row" sx={{ height: "100%", hight: "100%" }}>
          {/* LEFT HALF */}
          <Stack
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={product.images[pic]}
              sx={{ width: "60%", height: '65%', mb: 5, borderRadius: 7 }}
            ></Box>
            <Stack
              sx={{ width: "65%", borderRadius: 2 }}
              direction="row"
              justifyContent="space-evenly"
            >
              <Pic
                onMouseEnter={() => { setPic(1) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[1]}
              ></Pic>
              <Pic
                onMouseEnter={() => { setPic(2) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[2]}
              ></Pic>
              <Pic
                onMouseEnter={() => { setPic(3) }}
                onMouseLeave={() => { setPic(mainPic) }}
                component="img"
                src={product.images[3]}
              ></Pic>
            </Stack>
          </Stack>
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              width: "50%",
              height: "100%",
              border: "#FFF",
            }}
          >
            {/* <Box sx={{ position: 'absolute', right: '1px' }}>
              <IconButton
                sx={{ mr: "2%", mt: "2%", ml: "auto", color: "text.primary" }}
                onClick={onClick}
              >
                <CloseIcon></CloseIcon>
              </IconButton>
            </Box> */}

            {/* RIGHT HALF */}
            <Box sx={{m: 2}}>
              {/* Title */}
              <Box>
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="h6" sx={{ lineHeight: "50%"}}>
                  ${product.price}
                </Typography>
              </Box>
              <Divider sx={{my: 2}}/>

              <Box>
              <Typography>Product Description:</Typography>
                <Typography>{product.description}</Typography>


                <Box sx={{my: 3}}>
                <Typography>Product Details:</Typography>
                <List sx={{ listStyleType: 'disc', pl: 4, py: 0 }}>
                  <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>Adult Heavyweight Hoodie</ListItem>
                  <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>70% Cotton, 30% Polyester</ListItem>
                  <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                    Washing Instructions: Wash 30C. Wash inside out like with
                    colors. DO NOT BLEACH. Tumble dry low, DO NOT IRON.
                  </ListItem>
                </List>
                </Box>
              </Box>
             
             <Divider sx={{my: 2}}/>
             {/* Size */}
                <Box>
                <Typography variant="h5">Size</Typography>
                <ButtonGroup size="large" variant='outlined' aria-label="outlined button group">
                  {(() => {
                    let sizes = ["S", "M", "L"];
                    let list = [];
                    for(let i = 0; i < 3; i++){
                      list.push(
                        <Button>
                          <Typography>{sizes[i]}</Typography>
                        </Button>
                      )
                    }
                    return list;
                  })()}
                </ButtonGroup>

              <Typography>
                Size Guide
              </Typography>
              </Box>

              <Box>
              <Stack direction="row" justifyContent="space-between" spacing={1} sx={{m: 2}}>
                <Button onClick={() => cartHandler()} sx={{width: '60%', p: 2}}> 
                  Add To Cart
                </Button>

                <Button sx={{width: '30%'}}>
                  Buy Now
                </Button>
                </Stack>
              </Box>
            
            </Box>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
    : "");
}
