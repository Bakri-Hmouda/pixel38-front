import {Button, Divider, Toolbar, Typography} from "@mui/material";


export default function DashboardToolbar({username = 'bakri', }) {

    return <>
        <Toolbar color={'red'} sx={{mt: 2,}}>
            <Typography textTransform={'capitalize'} variant={'h6'} flex={1}>
                Welcome {username}!
            </Typography>
            <Button color={'secondary'} variant={"contained"}>New Shipment </Button>
        </Toolbar>
        <Divider/>
    </>
}