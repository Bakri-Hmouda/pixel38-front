import {useFormik} from 'formik';
import * as yup from 'yup';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    TextField,
    Typography
} from "@mui/material";


const validationSchema = yup.object({
    costumerName: yup
        .string('Enter a title')
        .required('Costumer name is required')

    ,
    costumerAddress: yup
        .string('Enter post body')
        .required('Costumer Address required')
    ,
    costumerPhoneNumber: yup
        .string('Enter an action button title')
        .required('Costumer phone number is required')
    ,
    originAddress: yup
        .string('Enter action button link')
        .required('Source address is required')
    ,
    destinationAddress: yup
        .string('Enter a banner image')
        .required('Destination address is required')
    ,
    charge: yup
        .string('Enter images for the post')
        .required('Charge is required')

});

const Field = ({param, label, formik})=>{
    return <TextField
        size={'small'}
        fullWidth
        margin={'normal'}
        id={param}
        name={param}
        label={label}
        value={formik.values[param]}
        onChange={formik.handleChange}
        error={formik.touched[param] && Boolean(formik.errors[param])}
        helperText={formik.touched[param] && formik.errors[param]}

    />

}

const NewOrderForm = ({open, close, addBlog}) => {



    const formik = useFormik({
        initialValues: {
            costumerName: '',
            costumerAddress: '',
            costumerPhoneNumber: '',
            originAddress: '',
            destinationAddress: '',
            charge: '',
        },
        validationSchema: validationSchema,
        validateOnChange: true
        ,
        onSubmit: async (values) => {
            console.log(JSON.stringify(values))
            const response = await addBlog(values)
            if (response.status === 200) formik.resetForm()
        },
    });
    const handleClose = () => {
        formik.resetForm()
        close()
    }
    return (
        <Dialog fullScreen open={open} onClose={close}>
            <DialogTitle>
                Create a new shipment order
            </DialogTitle>
            <DialogContent>
                <form id={'newBlogPost'} onSubmit={formik.handleSubmit}>

                    <Field param={'costumerName'} label={'Costumer Name'} formik={formik}/>
                    <Field param={'costumerAddress'} label={'Costumer Address'} formik={formik}/>
                    <Field param={'costumerPhoneNumber'} label={'Costumer phone number'} formik={formik}/>
                    <Divider sx={{mt:4}} ><Typography>Waybill</Typography></Divider>
                    <Field param={'originAddress'} label={'origin address'} formik={formik}/>
                    <Field param={'destinationAddress'} label={'destination address'} formik={formik}/>
                    <Field param={'charge'} label={'Charge'} formik={formik}/>

                </form>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleClose}>
                    cancel
                </Button>
                <Button form={'newBlogPost'} color="primary" variant="contained" type="submit">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
        ;
};

export default NewOrderForm