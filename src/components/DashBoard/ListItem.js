import {Button, Card, Grid, Typography,} from "@mui/material";

export default function ListItem({confirmDelete, edit}) {

    const id = '123'
    const data = {
        costumerName: 'bakri',
        costumerAddress: 'tripoli',
        costumerPhoneNumber: '12345678',
        originAddress: 'China',
        destinationAddress: 'Lebanon',
        charge: '3500',
    }

    return <>

        <Card sx={{p: 2}}>
            <Grid
                container
                spacing={3}
                alignItems={'center'}
            >
                <Grid item sm={12} md={3}>
                    <Typography noWrap>
                        <strong>Order ID: </strong> {'id'}
                    </Typography>

                </Grid>

                <Grid item sm={12} md={4}>
                    <Typography noWrap>
                        <strong> Customer Name:</strong> {'costumer name'}
                    </Typography>

                </Grid>

                <Grid item sm={12} md>
                    <Typography noWrap>
                        <strong>Order Date: </strong> {'1-2-2022'}
                    </Typography>

                </Grid>

                <Grid item sx={{display: 'flex', gap: 1}}>
                    <Button variant={'outlined'} size={'small'} color={'green'}
                            onClick={() => edit(data)}>Edit</Button>
                    <Button variant={'outlined'} size={'small'} color={'error'}
                            onClick={() => confirmDelete(id)}>Delete</Button>
                </Grid>


            </Grid>
        </Card>

    </>
}