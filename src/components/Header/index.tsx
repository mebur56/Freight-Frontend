import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from "react"

interface Props {
    handleToogle(open: boolean): any
    label: string
}

function Header(props: Props) {
    const { handleToogle, label } = props


    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    onClick={() => { handleToogle(true) }}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {label}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header