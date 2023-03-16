import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { notificationContents, notificationImage, snackbar } from '../styles/ProductNotificationStyles';
import Slide from '@mui/material/Slide';

export default function ProductNotification({ open, setOpen, product }) {

    // const [open, setOpen] = React.useState();

    function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false)
    };

    const action = (
        <React.Fragment>
            <Box component="img" src={product.images[0]} sx={notificationImage}></Box>
                <Box>
                    <Typography>{product.title}</Typography>
                    <Box>
                        <Typography>x1 Added to cart</Typography>
                    </Box>
                </Box>
        </React.Fragment>
    );

    return (
        <Snackbar
            key={"key"}
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            action={action}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            TransitionProps={SlideTransition}
            sx={snackbar}
        />
    );
}