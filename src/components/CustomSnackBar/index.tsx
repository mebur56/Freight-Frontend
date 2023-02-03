import { Snackbar, SnackbarContent } from "@mui/material";
import React from "react";
import { variantTypes } from "./types";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

interface Props {
    open: boolean;
    variant: variantTypes;
    handleClose(): any;
    message: string;
}


function CustomSnackBar(props: Props) {
    const { open, message, variant, handleClose } = props;
    const bgColor = variant == variantTypes.SUCCESS ? "green" : variant == variantTypes.ERROR ? "red" : "yellow"
    const Icon = variant == variantTypes.SUCCESS ? <CheckCircleIcon /> : variant == variantTypes.ERROR ? <ErrorIcon /> : <WarningIcon />

    return (
        <Snackbar
            open={open}
            onClose={() => handleClose()}
            autoHideDuration={5000000000}

        >
            <SnackbarContent style={{
                backgroundColor: bgColor,
            }}

                message={
                    <span id="client-snackbar">  {Icon} {message}</span>
                }
            />
        </Snackbar>)
}

export default CustomSnackBar