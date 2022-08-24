import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {mainTheme} from "./themes/mainTheme";
import UserStateProvider from "./services/userStateProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <UserStateProvider>
            <ThemeProvider theme={mainTheme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </UserStateProvider>
    </React.StrictMode>
);


