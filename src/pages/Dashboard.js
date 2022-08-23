import {Container} from "@mui/material";
import DashboardToolbar from "../components/DashBoard/DashboardToolbar";
import ListItem from "../components/DashBoard/ListItem";
import NewOrderForm from "../components/DashBoard/NewOrderForm";
import {useState} from "react";

export default function Dashboard() {

    const [openForm, SetOpenForm] = useState(false)

    const handleOpenForm = () => SetOpenForm(true)
    const handleCloseForm = () => SetOpenForm(false)

    return <>
        <Container name={'main'} disableGutters maxWidth={'xxl'}>

            <DashboardToolbar openForm={handleOpenForm}/>
            <Container sx={{my: 2}} maxWidth={'xxl'}>
                <ListItem/>
            </Container>

        </Container>

        <NewOrderForm open={openForm} close={handleCloseForm}/>
    </>
}