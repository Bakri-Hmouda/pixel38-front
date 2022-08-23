import {createTheme} from "@mui/material";
import {green} from "@mui/material/colors";

export  const mainTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2191FB'
        },
        secondary: {
            main: '#BA274A'
        },
        green:{
            main: green[500],
            light: green[300],
            dark: green[800],
        },
        background: {
            default: '#B2ECE1',
        }
    }

})