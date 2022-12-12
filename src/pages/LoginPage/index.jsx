import { LoginForm } from "../../components/LoginForm"
import { StyledLoginBg, StyledLoginBox } from "./style"
import logo from "../../assets/logo.svg"
import { Navigate } from "react-router-dom";

export function LoginPage () {

    const token = localStorage.getItem("@TOKEN");
    console.log(token)
    return token === null ?
        <StyledLoginBg className="login-bg-mobile display-flex justify-content-center align-item">
            <div className="display-flex flex-direction-column justify-content-center align-item login-box-mobile">
                <img className="logo" src={logo} alt="kenzie-hub-logo" />
                <StyledLoginBox className="login-mobile display-flex flex-direction-column justify-content-center align-item">
                    <h1>Login</h1>
                    <LoginForm/>
                    <p>Ainda não possui uma conta?</p>
                    <a className="to-register-button display-flex justify-content-center align-item" href="/registerPage">Cadastre-se</a>
                </StyledLoginBox>
            </div>
        </StyledLoginBg>
        :
        <Navigate to={"/dashboard"}/>
}