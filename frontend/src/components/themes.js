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
    h2: {
      fontSize: "3rem",
    },
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

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: '#FFF',
          "&:hover": {
            backgroundColor: "#FFF",
            color: "#000"
          },
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "#000",
          color: '#FFF',
        },
        icon: {
          color: "#FFF",
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: "#000",
          color: '#FFF',
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: '#FFF',
          "&:hover": {
            backgroundColor: "#FFF",
            color: "#000"
          },
        }
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#000',
          "&&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: '#FFF'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#FFF',
          '&.Mui-focused': {
            color: '#FFF'
          }
        },
      }
    },
  }
});

export const light_Theme = createTheme(coreTheme, {
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
    background: "#FFF",
    text: {
      primary: "#000",
      secondary: '#B0B0B0'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: '#FFF',
          "&:hover": {
            backgroundColor: "#FFF",
            color: "#000"
          },
        }
      },
      label: {
        color: '#000'
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "#000",
          color: '#FFF',
        },
        icon: {
          color: "#FFF",
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: "#000",
          color: '#FFF',
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: '#FFF',
          "&:hover": {
            backgroundColor: "#FFF",
            color: "#000"
          },
        }
      },
    }
  }
});
