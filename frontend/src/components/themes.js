import { BorderColor, Label } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";

const coreTheme = createTheme({
  typography: {
    fontFamily: ["Inter"],
    // fontFamily: ["IBM Plex Mono"],
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 770,
      hd: 1200,
      fhd: 1900,
      uhd: 2100
    }
  },
})

coreTheme.typography.h1 = {
  [coreTheme.breakpoints.up("tablet")]: {
    fontSize: "3.338rem",
  },
  [coreTheme.breakpoints.up("hd")]: {
    fontSize: "3.338rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "5.283rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "7.013rem",
  },
  
};
coreTheme.typography.h2 = {
  [coreTheme.breakpoints.down("hd")]: {
    fontSize: "2.67rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "4.042rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "5.261rem",
  },
  
};
coreTheme.typography.h3 = {
  [coreTheme.breakpoints.down("hd")]: {
    fontSize: "2.136rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "3.095rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "3.947rem",
  },
  
};
coreTheme.typography.h4 = {
  [coreTheme.breakpoints.down("hd")]: {
    fontSize: "1.709rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "2.372rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "2.961rem",
  },
};
coreTheme.typography.h5 = {
  [coreTheme.breakpoints.down("hd")]: {
    fontSize: "1.368rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "1.819rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "2.221rem",
  },
  
};
coreTheme.typography.h6 = {
  [coreTheme.breakpoints.down("tablet")]: {
    fontSize: "1.094rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "1.397rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "1.666rem",
  },
  
};
coreTheme.typography.body1 = {
  [coreTheme.breakpoints.down("tablet")]: {
    fontSize: "0.875rem",
  },
  [coreTheme.breakpoints.up("fhd")]: {
    fontSize: "1.074rem",
  },
  [coreTheme.breakpoints.up("uhd")]: {
    fontSize: "1.25rem",
  },
  
};

export const dark_Theme = createTheme(coreTheme, {

  palette: {
    primary: {
      main: "#624F82",
    },
    secondary: {
      main: "#2C3555",
    },
    background: "#2D2C42",
    text: {
      primary: "#FFFFFF",

    },
  },
});