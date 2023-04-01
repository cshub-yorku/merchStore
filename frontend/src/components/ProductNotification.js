import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { SnackbarContent, Typography } from '@mui/material';
import { closeButton, notificationContents, notificationImage, notificationMessage, snackbar, title } from '../styles/ProductNotificationStyles';
import Slide from '@mui/material/Slide';
import { bold } from '../styles/fontStyles';
import { useStoreContext } from '../controllers/StoreContext';

export default function ProductNotification({ open, setOpen, product }) {

    const storeContext = useStoreContext();

    function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false)
    };

    return (
        <Snackbar
            key={"key"}
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}

            TransitionProps={SlideTransition}
            sx={snackbar}
        >
            <SnackbarContent
                message={
                    <Box sx={notificationMessage}>
                        
                        <Box component="img" src={product.images[0]} sx={notificationImage}></Box>
                        <Box>
                            <Typography variant="body1" sx={[title, bold]}>{product.title}</Typography>
                            <Box>
                                <Typography>x1 Added to cart</Typography>
                            </Box>
                        </Box>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={() => { setOpen(false) }} sx={closeButton}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                }
            />
        </Snackbar >
    );
}