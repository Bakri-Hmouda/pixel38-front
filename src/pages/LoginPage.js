import {Container} from "@mui/material";
import LoginForm from "../components/loginIn_page_components/LoginForm";


export default function LoginPage(){

    return <Container
    disableGutters
    sx={{
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
    }}
    >
        <LoginForm/>
    </Container>
}