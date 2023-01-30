import { BorderColor, Label } from "@mui/icons-material";
import { createTheme } from "@mui/material";

// export const light_Theme = createTheme(deepmerge(coreTheme, createTheme({
//     palette: {
//         primary: {
//             light: '',
//             main: '',
//             dark: '',
//             contrastText: ''
//         }
//     }
// })))
let coreTheme = {
  typography: {
    fontFamily: ["IBM Plex Mono"],
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