import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/AppBar/NavBar";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/'} element={<NavBar/>}>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
