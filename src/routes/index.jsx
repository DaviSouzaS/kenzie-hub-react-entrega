import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/Dashboard";
import { TechProviders } from "../contexts/TechContext";

export function PrincipalRoutes () {
    return (
        <TechProviders>
            <Routes>
                <Route path="/" element = {<LoginPage/>}/>
                <Route path="/registerPage" element = {<RegisterPage/>}/>
                <Route path="/dashboard" element = {<Dashboard/>}/>
            </Routes>
        </TechProviders>
    )
}