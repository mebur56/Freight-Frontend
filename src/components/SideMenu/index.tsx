import styles from "./styles";
import { InboxOutlined, Upload } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Drawer, ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



interface Props {
    open: boolean;
    handleToogle(open: boolean): any
}

function SideMenu(props: Props) {
    const { open, handleToogle } = props
    const navigate = useNavigate();
    


    const data = [

        { name: "Upload de Frete", icon: <Upload />, link: "/" },
        { name: "Fretes", icon: <InboxOutlined />, link: "/freights" },
    ]

    const getList = () => (
        <div style={styles.menuButton} >
            {data.map((item, index) => (
                <ListItem key={index}>
                    <ListItemButton onClick={() => {
                        navigate(item.link)
                    }}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
            ))
            }
        </div>
    )


    return (
        <Drawer PaperProps={{
            sx: styles.menu
        }}
            variant={"temporary"} open={open} anchor={"left"} onClose={() => handleToogle(false)}>
            {getList()}
        </Drawer>
    )
}


export default SideMenu;