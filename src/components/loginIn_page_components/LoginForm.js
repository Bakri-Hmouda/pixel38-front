import {Paper, Stack, TextField} from "@mui/material";

export default function LoginForm () {
    return <form>
        <Paper sx={{p:10, width:'50%', }}>
            <Stack>
                <TextField
                    label={'username'}
                    type={'text'}
                    autoComplete={'username'}
                    margin={'normal'}
                />

                <TextField
                    label={'password'}
                    type={'password'}
                    autoComplete={'password'}
                    margin={'normal'}
                />

            </Stack>
        </Paper>
    </form>
}
