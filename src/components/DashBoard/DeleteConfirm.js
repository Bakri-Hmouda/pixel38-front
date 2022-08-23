import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";


export default function DeleteConfirm({open,_id, close, Delete}) {

    return <>

        <Dialog open={open} onClose={close}>
            <DialogTitle>
                Confirm Delete
            </DialogTitle>
            <DialogContent>
                <Typography>you can not undo this action, please confirm that you want to delete this order.</Typography>
            </DialogContent>

            <DialogActions>
                <Button variant={'outlined'} onClick={close}>Cancel</Button>
                <Button variant={"contained"} color={'error'} onClick={()=>Delete(_id)}>Confirm</Button>
            </DialogActions>

        </Dialog>

    </>
}