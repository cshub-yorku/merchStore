

export const button_white = {
    backgroundColor: "#FFF",
    color: '#000',
    '&:hover': {
        backgroundColor: '#000',
        color: '#FFF'
    }
}

export const button_black = {
    backgroundColor: "#000",
    color: '#FFF',
    '&:hover': {
        backgroundColor: '#FFF',
        color: '#000'
    }
}

export const button_theme = {
    backgroundColor: "primary",
    color: '#FFF',
    '&:hover': {
        backgroundColor: '#FFF',
        color: '#000'
    }
}

export const select_menu_black = {
    PaperProps: {
        sx: {
          bgcolor: 'black',
          '& .MuiMenuItem-root': {
            padding: 2,
            '&:hover':{
                bgcolor: 'white',
                color: 'black'
            }
          },
        },
      },
}

export const select_black = {
    '& .MuiInputBase-root':{
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