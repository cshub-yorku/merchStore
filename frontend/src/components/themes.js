import { BorderColor, Label } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";

const coreTheme = createTheme({
  typography: {
    fontFamily: ["IBM Plex Mono"],
    fontSize: '16px'
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 770,
      fhd: 1600,
      uhd: 2100
    }
  },
})

coreTheme.typography.h1 = {
  [coreTheme.breakpoints.up("tablet")]: {
    fontSize: "6rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "9rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "13.5rem",
  },
  
};
coreTheme.typography.h2 = {
  [coreTheme.breakpoints.down("tablet")]: {
    fontSize: "3.75rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "5.625rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "8.4375rem",
  },
  
};
coreTheme.typography.h3 = {
  [coreTheme.breakpoints.down("tablet")]: {
    fontSize: "3rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "4.5rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "6.75rem",
  },
  
};
coreTheme.typography.h4 = {
  [coreTheme.breakpoints.down("tablet")]: {
    fontSize: "2.125rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "3.1875rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "4.79125rem",
  },
  
};
coreTheme.typography.h5 = {
  [coreTheme.breakpoints.down("tablet")]: {
    fontSize: "1.5rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "2.25rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "3.375rem",
  },
  
};
coreTheme.typography.h6 = {
  [coreTheme.breakpoints.down("tablet")]: {
    fontSize: "1.25rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "1.875rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "2.8125rem",
  },
  
};
coreTheme.typography.body1 = {
  [coreTheme.breakpoints.down("tablet")]: {
    fontSize: "1rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "1.5rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "2.25rem",
  },
  
};

export const dark_Theme = createTheme(coreTheme, {

  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#624F82",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
    background: "#2D2C42",
    text: {
      primary: "#FFFFFF",

    },
  },
});