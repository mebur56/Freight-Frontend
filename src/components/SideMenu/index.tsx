import styles from "./styles";
import { InboxOutlined, Upload } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Drawer, ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UploadRequestAction } from "../../features/uploadPage/action";



function SideMenu() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(UploadRequestAction({file: "teste"}))
    
    const data = [

        { name: "Upload de Frete", icon: <Upload />, link: "/" },
        { name: "Fretes", icon: <InboxOutlined />, link: "/freights" },
    ]

    const getList = () => (
        <div style={styles.menuButton} >
            {data.map((item, index) => (
                <ListItem key={index}>
                    <ListItemButton onClick={() => { navigate(item.link) }}>
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
            variant={"permanent"} open={open} anchor={"left"} onClose={() => setOpen(false)}>
            {getList()}
        </Drawer>
    )
}


  export default SideMenu;