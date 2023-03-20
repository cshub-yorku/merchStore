export const button_white = {
    bgcolor: "#FFF",
    color: '#000',
    '&:hover': {
        bgcolor: '#000',
        color: '#FFF'
    }
}

export const button_black = {
    bgcolor: "#000",
    color: '#FFF',
    '&:hover': {
        bgcolor: '#FFF',
        color: '#000',
    }
}

export const button_theme = (theme) => {
    return {
        bgcolor: "#2C3555",
        color: '#FFF',
        '&:hover': {
            bgcolor: '#FFF',
            color: '#000'
        }
    }
}

export const toggle_button_black = {
    backgroundColor: '#000',
    color: "#FFF",
    '&.Mui-selected': {
        color: '#000',
        backgroundColor: '#FFF',
        '&:hover': {
            backgroundColor: '#FFF',
            color: '#000',
        },
    },
    '&:hover': {
        backgroundColor: 'gray',
    },
}

export const select_menu_black = {
    PaperProps: {
        sx: {
            bgcolor: 'black',
            '& .MuiMenuItem-root': {
                padding: 2,
                '&:hover': {
                    bgcolor: 'white',
                    color: 'black'
                }
            },
        },
    },
}

export const select_black = {
    '& .MuiInputBase-root': {
        bgcolor: 'black',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
    },
    '& .MuiSvgIcon-root': {
        color: 'white'
    },
    '&:before': {
        borderBottom: `1px solid white`
    },
    '&:hover': {
        ':before': {
            borderBottom: `1px solid white`
        }
    },
    '& .MuiMenuItem-root': {
        bgcolor: 'black'
    },
    '& .MuiFormLabel-root': {
        color: 'white',
        bgcolor: 'black',
        px: '7px',
        borderRadius: '3px'
    }
}

export const PopoverStyle = {
    pointerEvents: 'none',
}

export const field__white = {

    "& .MuiInputBase-root": {
        bgcolor: 'white',
    },

    ".MuiOutlinedInput-root": {
        ":hover": {
            ".MuiOutlinedInput-notchedOutline": {
                borderColor: 'gray'
            },
        }
    },

    ".MuiOutlinedInput-root.Mui-focused": {
        ".MuiOutlinedInput-notchedOutline": {
            borderColor: 'black'
        },
    },

    ".MuiInputLabel-root.Mui-focused": {
        bgcolor: "white",
        px: 0.6,
        py: 0.1,
        borderColor: "black",
        border: 2,
        borderRadius: '5px',
    },

    "& .MuiInputLabel-shrink": {
        bgcolor: "white",
        px: 0.6,
        py: 0.1,
        borderColor: "black",
        border: 2,
        borderRadius: '5px',
    },

    "& .MuiInputBase-input": {
        color: "black",
    },

    ".MuiFormHelperText-root": {
        color: 'white',
    }
};

export const field_white = {
    '& .MuiOutlinedInput-root': {
        background: 'white',
        border: '0.3px solid #BBB',
        transition: 'border-color 0.1s ease-in-out',

        color: "black",
        
        '&:hover': {
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
            borderColor: '#000',
        },
        '&.Mui-focused': {
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
            border: '0.3px solid #red',
        },
    },
    '& .MuiInputLabel-root': {

    },
    '& .MuiInputLabel-shrink': {
        bgcolor: "white",
        px: 0.6,
        py: 0.1,
        borderColor: "black",
        border: 2,
        borderRadius: '5px',
    },

    '& .MuiOutlinedInput-notchedOutline': {
        // border: '0.3px solid #BBB',
        // transition: 'border-color 0.1s ease-in-out',
        boder: 'none'
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: "#000",
        boder: 'none'
    },
}