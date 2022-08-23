import {Container} from "@mui/material";
import DashboardToolbar from "../components/DashBoard/DashboardToolbar";
import ListItem from "../components/DashBoard/ListItem";

export default function Dashboard() {
    return <Container name={'main'} disableGutters maxWidth={'xxl'}>

<DashboardToolbar/>
        <Container maxWidth={'xxl'}>
            <ListItem/>
        </Container>
    </Container>

}