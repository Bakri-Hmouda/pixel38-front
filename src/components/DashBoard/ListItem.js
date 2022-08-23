import {Button, Card, Grid, Typography,} from "@mui/material";

export default function ListItem() {
    return <>

        <Card sx={{p: 2}}>
            <Grid
                container
                spacing={3}
                alignItems={'center'}
            >
                <Grid
                    item
                    sm={12}
                    md={3}
                >
                    <Typography noWrap>
                    <strong>Order ID: </strong>    {'id'}
                    </Typography>

                </Grid>

                <Grid
                    item
                    sm={12}
                    md={4}
                >
                    <Typography  noWrap>
                        <strong>  Customer Name:</strong> {'costumer name'}
                    </Typography>

                </Grid>

                <Grid
                    item
                    sm={12}
                    md
                >
                    <Typography noWrap>
                       <strong>Order Date: </strong> {'1-2-2022'}
                    </Typography>

                </Grid>

                <Grid
                    sx={{display: 'flex', gap: 1}}
                    item>
                    <Button variant={'outlined'} size={'small'} color={'green'}>Edit</Button>
                    <Button variant={'outlined'} size={'small'} color={'error'}>Delete</Button>
                </Grid>


            </Grid>
        </Card>

    </>
}