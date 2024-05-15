import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { Portal } from '@mui/base/Portal';
import { useIntl } from 'react-intl';
import { deleteProductById } from 'app/data/products'


const timeout = 3000;


export default function DeleteButton({ product, action }) {
    const { formatMessage } = useIntl();

    const [notificationOpen, setNotificationOpen] = React.useState(false);
    const [notificationMessage, setNotificationMessage] = React.useState("");
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [alertTitle, setAlertTitle] = React.useState(formatMessage({ id: "product.delete.confirm.title" }));
    const [alertMessage, setAlertMessage] = React.useState("");

    const productDeleteHandler = () => {
        setAlertMessage(formatMessage({ id: "product.delete.confirm.question" }) + product.name + " ?");
        setAlertOpen(true);
    };

    const handleCancel = () => {
        setAlertOpen(false);
    };

    const handleNotificationClose = () => {
        setNotificationOpen(false);
    };

    const handleOK = (product) => {
        if (product === null) {
            console.log("Unexpected null product!");
            return;
        }
        deleteProductById(product.id);
        setAlertOpen(false);
        setNotificationMessage(product.name + formatMessage({ id: "product.delete.confirm.success" }));
        setNotificationOpen(true);
        action();
    };


    return (
        <>
            <IconButton onClick={productDeleteHandler}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={alertOpen} onClose={handleCancel}>
                <DialogTitle>{alertTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{alertMessage}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleOK(product)} autoFocus>{formatMessage({ id: "button.ok" })}</Button>
                    <Button onClick={handleCancel}>{formatMessage({ id: "button.cancel" })}</Button>
                </DialogActions>
            </Dialog>
            <Portal>
                <Snackbar
                    open={notificationOpen}
                    autoHideDuration={timeout}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    sx={{ position: "absolute" }}
                    onClose={handleNotificationClose}>
                    <Alert
                        onClose={handleNotificationClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {notificationMessage}
                    </Alert>
                </Snackbar>
            </Portal>
        </>
    );
}
