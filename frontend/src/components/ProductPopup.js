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
  useMediaQuery,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import {
  button_black,
  toggle_button_black,
  PopoverStyle,
} from "../styles/Styles";
import {
  helperNotation,
  PopoverText,
  productBuy,
  productBuyButton,
  productMainImage,
  ProductPopover,
  productPriceBox,
  productPriceText,
  productSubImage,
  SizeButtonGroup,
  subImages,
  ToggleButtonSeparations,
  productStyle,
  gridContainer,
  imageGridContainer,
  headerGridContainer,
  bodyGridContainer,
  closeButton
} from "../styles/ProductPopupStyles";
import { bold, fontJura, medium, themeColor } from "../styles/fontStyles";
import { useNavigate } from "react-router";
import { useStoreContext } from "../controllers/StoreContext";
import CartQuantityButton from "./CartQuantityButton";
import { cart_controls_box } from "../styles/CartDrawer";


export default function ProductPopup({
  trigger,
  onClick,
  product,
}) {
  const theme = useTheme();
  const mainPic = 0;
  const navigate = useNavigate();

  const menuPaperStyles = {
    // Change the background color for the dropdown list
    background: '#282A4E', // Change to your desired color
  };

  const [pic, setPic] = useState(mainPic);
  const [shippingPopover, setShippingPopover] = useState(null);
  const shippingOpen = Boolean(shippingPopover);

  const [sizePopover, setSizePopover] = useState(null);
  const sizeOpen = Boolean(sizePopover);
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1)
  const handleSize = (event, newSize) => {
    setSize(newSize);
  };

  const bSmallScreen = useMediaQuery(theme.breakpoints.down('mobile'))

  const cart = useStoreContext();

  return product ? (
    <Dialog
      open={trigger}
      onClose={onClick}
      fullScreen={true}
      PaperProps={{
        sx: productStyle(theme)
      }}
    >
      <DialogContent
        classes={{ root: { m: 0, p: 0 } }}
        sx={{ "&.MuiDialogContent-root": { m: 0, p: 0 }, bgcolor: theme.palette.primary.main }}
      >
        <Box sx={gridContainer(theme)}>
          <Box sx={imageGridContainer(theme)}>
            <Box
              component="img"
              src={product.images[pic]}
              sx={productMainImage(theme)}
            ></Box>
            <Stack
              sx={subImages}
              direction="row"
              justifyContent="center"
            >
              <Box
                onMouseEnter={() => {
                  setPic(1);
                }}
                onMouseLeave={() => {
                  setPic(mainPic);
                }}
                component="img"
                src={product.images[1]}
                sx={productSubImage}
              ></Box>
              <Box
                onMouseEnter={() => {
                  setPic(2);
                }}
                onMouseLeave={() => {
                  setPic(mainPic);
                }}
                component="img"
                src={product.images[2]}
                sx={productSubImage}
              ></Box>
              <Box
                onMouseEnter={() => {
                  setPic(3);
                }}
                onMouseLeave={() => {
                  setPic(mainPic);
                }}
                component="img"
                src={product.images[3]}
                sx={productSubImage}
              ></Box>
            </Stack>
          </Box>
          <Box sx={headerGridContainer(theme)}>
            <Box sx={{ display: 'flex', flexDirection: "row", alignContent: 'center' }}>
              <Typography variant="h3" sx={[medium, fontJura, { my: '2%' }]}>{product.name}</Typography>
              <IconButton sx={[themeColor, closeButton]} onClick={onClick}>
                <CloseIcon sx={{ color: '#000' }}></CloseIcon>
              </IconButton>
            </Box>
            {bSmallScreen && <Typography variant="h6" sx={{ color: '#000', textAlign: 'center' }}>$66</Typography>}
          </Box>
          <Box sx={bodyGridContainer(theme)}>
            <Typography variant="body1">{product.description}</Typography>
            <Box>
              <Typography variant="body1" sx={bold}>
                Product Details:
              </Typography>

              <List>
                <List sx={{ listStyleType: 'disc', pl: 4, py: 0 }}>
                  <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>Adult Heavyweight Hoodie</ListItem>
                  <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>70% Cotton, 30% Polyester</ListItem>
                  <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                    Washing Instructions: Wash 30C. Wash inside out like with
                    colors. DO NOT BLEACH. Tumble dry low, DO NOT IRON.
                  </ListItem>
                </List>
              </List>
            </Box>

            <Box sx={cart_controls_box(theme)}>
              <Box sx={{ m: 'auto', ml: '1%' }}>
                <ToggleButtonGroup
                  value={size}
                  exclusive
                  onChange={handleSize}
                  aria-label="size"
                  sx={SizeButtonGroup(theme)}
                >
                  <ToggleButton
                    value="S"
                    aria-label="small"
                    sx={toggle_button_black}
                  >
                    <Typography variant="h6">S</Typography>
                  </ToggleButton>
                  <ToggleButton
                    value="M"
                    aria-label="medium"
                    sx={[toggle_button_black, ToggleButtonSeparations]}
                  >
                    <Typography variant="h6">M</Typography>
                  </ToggleButton>
                  <ToggleButton
                    value="L"
                    aria-label="large"
                    sx={toggle_button_black}
                  >
                    <Typography variant="h6">L</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
                <Typography variant="body1" sx={helperNotation}>
                  ⓘ Size Guide
                </Typography>
              </Box>


              <CartQuantityButton
                quantity={quantity}
                setQuantity={setQuantity}
              />
            </Box>


            <Box sx={productBuy(theme)}>
              {!bSmallScreen && <Box sx={productPriceBox}>
                <Typography variant="h5" sx={[bold, fontJura, productPriceText]}>
                  {product.price}$
                </Typography>
              </Box>}
              <ButtonGroup sx={productBuyButton}>
                <Button
                  onClick={() => { cart.changeItemAmount(product, quantity) }}
                  variant="outlined"
                  sx={[button_black, productBuyButton]}
                >
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Add To Cart
                  </Typography>
                </Button>
                {/* {!bSmallScreen && <Button
                  onClick={() => { cart.changeItemAmount(product, quantity) }}
                  variant="outlined"
                  sx={[button_black, productBuyButton]}
                >
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Add To Cart
                  </Typography>
                </Button>} */}
                <Button sx={[button_black, productBuyButton]} onClick={() => { navigate("/product"); }}>
                  <Typography variant="body1" sx={[bold, fontJura]}>
                    Buy Now
                  </Typography>
                </Button>
              </ButtonGroup>
            </Box>

            <Typography
              variant="body1"
              sx={helperNotation}
              aria-owns={shippingOpen ? 'shippingP' : undefined}
              aria-haspopup="true"
              onMouseEnter={(event) => {
                setShippingPopover(event.currentTarget);
              }}
              onMouseLeave={() => {
                setShippingPopover(null);
              }}
            >
              ⓘ Shipping Details
            </Typography>
            <hr></hr>
            <Typography variant="body1" sx={bold}>
              Product Details:
            </Typography>

            <List>
              <List sx={{ listStyleType: 'disc', pl: 4, py: 0 }}>
                <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>Adult Heavyweight Hoodie</ListItem>
                <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>70% Cotton, 30% Polyester</ListItem>
                <ListItem sx={{ display: 'list-item', px: 0, py: 0.5 }}>
                  Washing Instructions: Wash 30C. Wash inside out like with
                  colors. DO NOT BLEACH. Tumble dry low, DO NOT IRON.
                </ListItem>
              </List>
            </List>
            <Popover
              id="shippingP"
              sx={[PopoverStyle, ProductPopover]}
              open={shippingOpen}
              anchorEl={shippingPopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={() => {
                setShippingPopover(null);
              }}
              disableRestoreFocus
            >
              <Typography variant="body1" sx={PopoverText}>
                Ships within 2-3 business days, available only in Greater
                Toronto Area.
              </Typography>
            </Popover>
          </Box>
        </Box>
      </DialogContent>
    </Dialog >
  ) : (
    ""
  );
}