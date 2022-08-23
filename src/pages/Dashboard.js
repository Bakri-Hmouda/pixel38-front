import {Container, Stack, Typography} from "@mui/material";
import DashboardToolbar from "../components/DashBoard/DashboardToolbar";
import ListItem from "../components/DashBoard/ListItem";
import NewOrderForm from "../components/DashBoard/NewOrderForm";
import {useState} from "react";
import DeleteConfirm from "../components/DashBoard/DeleteConfirm";
import EditOrderForm from "../components/DashBoard/EditOrderForm";

export default function Dashboard() {

    const [openForm, SetOpenForm] = useState(false)
    const [deleteData, setDeleteData] = useState({open: false, _id: ''})
    const [edit, setEdit] = useState({open: false, data: {}})

    // open new order dialog
    const handleOpenForm = () => SetOpenForm(true)
    const handleCloseForm = () => SetOpenForm(false)

    // open confirm delete dialog
    const openConfirmDelete = (id) => setDeleteData({open: true, _id: id})
    const closeConfirmDelete = () => setDeleteData({open: false, _id: ''})

    // open edit order form
    const openEditForm = (data) => setEdit({open: true, data: {...data}})
    const closeEditForm = () => setEdit({open: false, data: {}})

    // Send delete request to server
    const deleteHandler = (id) => closeConfirmDelete()

    // edit handle and request to server
    const editHandler =(data)=>closeEditForm()

    return <>
        <Container name={'main'} disableGutters maxWidth={'xxl'}>

            <DashboardToolbar openForm={handleOpenForm}/>
            <Container sx={{my: 2}} maxWidth={'xxl'}>
                <Stack gap={1.5}>
                    {[1, 2].map((order) => <ListItem confirmDelete={openConfirmDelete} edit={openEditForm}/>) ||
                        <Typography>NO Orders</Typography>}
                </Stack>
            </Container>

        </Container>

        <NewOrderForm open={openForm} close={handleCloseForm}/>
        <EditOrderForm {...edit} close={closeEditForm}/>
        <DeleteConfirm {...deleteData} close={closeConfirmDelete} Delete={deleteHandler}/>
    </>
}