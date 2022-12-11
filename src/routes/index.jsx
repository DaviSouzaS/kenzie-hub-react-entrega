import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/Dashboard";

export function PrincipalRoutes ({setUser}) {
    return (
        <Routes>
            <Route path="/" element = {<LoginPage/>}/>
            <Route path="/registerPage" element = {<RegisterPage/>}/>
            <Route path="/dashboard" element = {<Dashboard/>}/>
        </Routes>
    )
}