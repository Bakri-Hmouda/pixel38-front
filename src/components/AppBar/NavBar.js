import {AppBar, Box, Button, styled, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material'

import isIE from '../../utilities/isIE';
import DrawerComponent from './Drawer';
import {Outlet} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function NavBar() {

    // create an offset element to prevent element going under the navBar
    const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

    const theme = useTheme()
    const navigate = useNavigate()
    const isMobileView = useMediaQuery(theme.breakpoints.down("md"))
    // the GetRootPath ensure that the active tab is always pointing to the root path
    const handleNavigation = (route) => {
        navigate(route);
    };

    return (


        <>
            <AppBar
                elevation={0}
                color='background'
                position="sticky"
            >
                <Toolbar>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        flexGrow={1}
                    >
                        <Typography textTransform={'uppercase'}> Express shipping</Typography>
                    </Box>

                    {isMobileView ?
                        <DrawerComponent />
                        :
                        <Box
                            sx={{
                                display: 'flex',
                            }}
                        >

                            <Button>Sign Out</Button>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
            {
                // check if userAgent is IE
                // if userAgent is IE create space in place of navbar because IE don't support nav sticky
                isIE() && <Offset/>
            }

            <Outlet/>
        </>

    )
}

export default NavBar
