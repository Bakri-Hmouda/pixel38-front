import {Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import LoginForm from "../components/loginIn_page_components/LoginForm";


export default function LoginPage() {


    const theme = useTheme()
    const isMobileView = useMediaQuery(theme.breakpoints.down("md"))

    return <Container
        name={'main'}
        sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',

        }}
    >
        <Box width={'100%'}
             display={"flex"}
             justifyContent={"space-between"}
             alignItems={'center'}
             flexWrap={'wrap'}
             gap={2}
        >
            <Typography flex={1} variant={isMobileView ? 'h5' : 'h2'}>
                Welcome to express Shipping
            </Typography>
            <LoginForm/>
        </Box>
    </Container>
}