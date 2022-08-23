import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider} from "@mui/material";
import {mainTheme} from "./themes/mainTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={mainTheme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);


