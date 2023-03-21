import {
  MenuItem,
  Select,
  FormControl,
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import "../styles/Product.css";
import React, { useState } from "react";

export default function Product() {
  return (
    <Box className="product" color="background">
      <div className="product-image-container">
        <img src={"./global/model.png"} className="product-image"></img>
      </div>

      <div className="product-container">
        <div className="product-title">CSHub: Hacker's Black Shirt</div>
        <div className="product-price">$25.00</div>

        <div className="product-size-container">
          <label className="product-size-label">Size</label>
          <FormControl fullWidth>
            <Select displayEmpty id="product-size-select" label="Size">
              <MenuItem value={10}>S</MenuItem>
              <MenuItem value={20}>M</MenuItem>
              <MenuItem value={30}>L</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="product-quantity-container">
          <label className="product-quantity-label">Quantity</label>
          <FormControl fullWidth color="text">
            <Select
              displayEmpty
              id="product-quantity-select"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button variant="outlined" sx={{ width: "100%" }}>
          Add To Cart
        </Button>
        {/* <div className="product-atc-container">
          <button variant="text" className="product-atc-btn">Add To Cart</button>
        </div> */}

        <div className="product-details-container">
          <div className="product-details">
            <div className="product-details-title">Product Details: </div>
            <ul className="product-details-points">
              <li>Adult Heavyweight T-Shirt</li>
              <li>70% Cotton, 30% Polyester</li>
              <li>
                Washing Instructions: Wash 30C. Wash inside out like with
                colors. <span>DO NOT BLEACH.</span> Tumble dry low,{" "}
                <span>DO NOT IRON.</span>
              </li>
            </ul>
          </div>
          <div className="product-shopping-info">
            Shipping Info: Ships within 2-3 business days, available only in
            Greater Toronto Area.
          </div>
        </div>
      </div>
    </Box>
  );
}
