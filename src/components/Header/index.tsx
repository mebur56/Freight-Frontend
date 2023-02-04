import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from "react"

interface Props {
    handleToogle(open: boolean): any
}

function Header(props: Props) {
    const { handleToogle } = props
    const pathNames = [
        { name: "Upload de Frete", link: "/" },
        { name: "Fretes", link: "/freights" },
    ]
    const item = pathNames.find(x => x.link === window.location.pathname )
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
                    {item.name}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header