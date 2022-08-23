import {Container} from "@mui/material";
import DashboardToolbar from "../components/DashBoard/DashboardToolbar";
import ListItem from "../components/DashBoard/ListItem";

export default function Dashboard() {
    return <Container name={'main'}  disableGutters maxWidth={'xxl'}>

        <DashboardToolbar/>
        <Container sx={{my:2}} maxWidth={'xxl'}>
            <ListItem/>
        </Container>

    </Container>

}