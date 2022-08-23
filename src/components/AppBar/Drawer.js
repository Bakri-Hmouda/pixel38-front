import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import {ExitToApp} from "@mui/icons-material";
/** 
 *  Drawer component that will act as the navigation sidebar when in mobile view
 */function DrawerComponent() {
    const Navigate = useNavigate() //create an instance of useNavigate hook
    const [openDrawer, setOpenDrawer] = useState(false)
    //login handler
    const handleNavigation = (value) => {
        if (!value) return //guard clause if no value is passed in
        Navigate(value)
    }


    return (
        <>
            <Drawer open={openDrawer}
                anchor={'right'}
                onClose={() => { setOpenDrawer(false) }}
            >
                <List sx={{ flexGrow: 1 }}>


                    <ListItemButton onClick={() => handleNavigation('/login')}
                    >
                        <ListItemIcon>
                            <ExitToApp />
                        </ListItemIcon>
                        <ListItemText>Sign out</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} color='secondary'>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent
