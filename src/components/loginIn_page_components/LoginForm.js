import {Button, Paper, Stack, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";

export default function LoginForm() {

    const theme = useTheme()
    const isMobileView = useMediaQuery(theme.breakpoints.down("md"))

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('login')
    }

    return <Paper sx={{flex: 0.5, p: 5, minWidth: isMobileView ? '100%' : '40%',}}>
        <form id={'login-form'} onSubmit={handleSubmit}>
            <Stack gap={2}>
                <Typography variant={'h4'} gutterBottom> LOGIN</Typography>
                <TextField
                    label={'username'}
                    type={'text'}
                    autoComplete={'username'}
                />

                <TextField
                    label={'password'}
                    type={'password'}
                    autoComplete={'password'}
                />

                <Button size={'large'} type={'submit'} variant={'contained'}>Login</Button>

            </Stack>
        </form>
    </Paper>
}
