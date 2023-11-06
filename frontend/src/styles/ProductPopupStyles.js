export const productStyle = (theme) => ({
  bgcolor: "#171717",
  border: '1px solid #222222',

  [theme.breakpoints.up("tablet")]: {
    width: "62%",
    height: "72%",
    borderRadius: "0.5rem",
  },

  //
  // IMPORTANT!! THIS CODE IS INTENDED TO BE USED LATER AFTER BREAKPOINT REWORK
  //
  // [theme.breakpoints.up('fhd')]: {
  //     width: "62%",
  //     height: "72%",
  //     borderRadius: "2px",
  // },
  // [theme.breakpoints.down('mobile')]: {
  //     borderRadius: "0px",
  // }
});

export const gridContainer = (theme) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "repeat(auto-fit, 1fr)",

  [theme.breakpoints.down("tablet")]: {
    width: "auto",
    height: "auto",
    height: "auto",
    m: "2%",
    borderRadius: "4px",
  },

  [theme.breakpoints.up("hd")]: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    m: 0,
  },

  //
  // IMPORTANT!! THIS CODE IS INTENDED TO BE USED LATER AFTER BREAKPOINT REWORK
  //
  // [theme.breakpoints.up('mobile')]: {
  //     width: 'auto',
  //     height: 'auto',
  //     height: 'auto',
  //     bgcolor: 'white',
  //     m: '2%',
  //     borderRadius: '4px'
  // },

  // [theme.breakpoints.up('hd')]: {
  //     width: '100%', height: '100%',
  //     overflow: 'hidden',
  //     m: 0,
  //     bgcolor: 'transparent',
  // },
});

export const imageGridContainer = (theme) => ({
  position: "relative",

  [theme.breakpoints.down("tablet")]: {
    gridColumn: "1/3",
    gridRow: "2/9",
  },

  [theme.breakpoints.up("hd")]: {
    gridColumn: "1/1",
    gridRow: "1/17",
  },

  //
  // IMPORTANT!! THIS CODE IS INTENDED TO BE USED LATER AFTER BREAKPOINT REWORK
  //
  // [theme.breakpoints.up('mobile')]: {
  //     gridColumn: '1/3',
  //     gridRow: '2/9',
  // },

  // [theme.breakpoints.up('hd')]: {
  //     gridColumn: '1/1',
  //     gridRow: '1/17',
  // },
});

export const headerGridContainer = (theme) => ({
  color: "black",

  [theme.breakpoints.down("tablet")]: {
    gridColumn: "1/3",
    gridRow: "1/1",
    ml: " 3%",
    color: "white",
  },
  [theme.breakpoints.up("hd")]: {
    gridColumn: "2/2",
    gridRow: "1/1",
    mx: "4%",
    color: "white",
  },

  //
  // IMPORTANT!! THIS CODE IS INTENDED TO BE USED LATER AFTER BREAKPOINT REWORK
  //
  // [theme.breakpoints.up('mobile')]: {
  //     gridColumn: '1/3',
  //     gridRow: '1/1',
  //     ml: ' 3%',
  //     color: 'black',
  // },
  // [theme.breakpoints.up('hd')]: {
  //     gridColumn: '2/2',
  //     gridRow: '1/1',
  //     mx: '4%',
  //     color: 'white',
  // },
});

export const bodyGridContainer = (theme) => ({
  [theme.breakpoints.down("tablet")]: {
    gridColumn: "1/3",
    gridRow: "9/17",
    color: "white",
  },
  [theme.breakpoints.up("hd")]: {
    gridColumn: "2/2",
    gridRow: "2/17",
    color: "white",
  },

  //
  // IMPORTANT!! THIS CODE IS INTENDED TO BE USED LATER AFTER BREAKPOINT REWORK
  //
  // [theme.breakpoints.up('mobile')]: {
  //     gridColumn: '1/3',
  //     gridRow: '9/17',
  //     color: 'black'
  // },
  // [theme.breakpoints.up('hd')]: {
  //     gridColumn: '2/2',
  //     gridRow: '2/17',
  //     color: 'white',
  // },
});

export const productSubImage = {
  width: "5%",

  // '&:hover': {
  //     border: '1px solid',
  //     borderColor: '#FFF',
  // }
};

export const productMainImage = (theme) => ({
  aspectRatio: "1 / 1",
  marginLeft: "13%",
  marginRight: "auto",
  marginTop: "3%",
  width: "80%",
  height: "90%",
  objectFit: "cover",

  // [theme.breakpoints.up('mobile')]: {
  //     // height: '96vw'
  // },

  [theme.breakpoints.up("hd")]: {
    height: "90%",
  },
});

export const subImages = {
  // left: '-25%',
  bottom: 0,
  position: "absolute",
  width: "100%",
  borderRadius: 2,
};

export const productMain = (theme) => ({
  bgcolor: theme.palette.primary.main,
  // width: "50%",
  // height: "100%",
  // border: "#FFFFFF",
  // px: '1%'
});

export const header = (theme) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  [theme.breakpoints.up("mobile")]: {
    my: "2%",
  },

  [theme.breakpoints.up("hd")]: {
    my: "0%",
  },
});

export const productPriceBox = {
  position: "absolute",
  ml: "96%",
  height: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  bgcolor: "#793BEE",
  borderRadius: "5px",
  px: "12%",
};

export const productPriceText = {
  color: "white",
};

export const productBuy = (theme) => ({
  position: "relative",
  display: "flex",

  [theme.breakpoints.up("mobile")]: {
    width: "68%",
    height: "10%",
  },

  [theme.breakpoints.up("hd")]: {
    width: "18vw",
    height: "10%",
  },
});

export const productBuyButton = {
  height: "100%",
  width: "100%",
  bgcolor: "#793BEE",
};

export const ToggledButton = {};

export const ToggleButtonSeparations = {
  borderColor: "white",
  border: 0,
  borderRight: 0,
  borderLeft: 10,
};

export const SizeButtonGroup = (theme) => ({
  backgroundColor: "#282A4E22",
  color: "#FFF",
  "&.Mui-selected": {
    color: "#000",
    backgroundColor: "#FFF",
    "&:hover": {
      backgroundColor: "#FFF",
      color: "#000",
    },
  },
  "&:hover": {
    backgroundColor: "black",
  },

  "& .MuiToggleButtonGroup-grouped": {
    width: "34%",
  },

  width: "100%",

  [theme.breakpoints.up("hd")]: {
    width: "40%",
  },
});

export const helperNotation = {
  mt: "1%",
  color: "#C8C8C8",
};

export const ProductPopover = {
  "& .MuiPaper-root": {
    bgcolor: "#000",
  },
};

export const PopoverText = {
  m: 1,
};

export const closeButton = (theme) => ({
  ml: "auto",
  mr: "3%",
  my: "auto",

  [theme.breakpoints.up("mobile")]: {
    color: "black",
  },

  [theme.breakpoints.up("hd")]: {
    color: "white",
  },
});
