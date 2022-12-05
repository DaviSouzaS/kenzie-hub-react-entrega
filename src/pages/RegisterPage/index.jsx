import { RegisterForm } from "../../components/RegisterForm"
import { StyledRegisterBg, StyledRegisterContainer} from "./style"
import logo from "../../assets/logo.svg"

export function RegisterPage () {

    return (
        <StyledRegisterBg className="display-flex justify-content-center align-item">
            <StyledRegisterContainer className="register-container-mobile register-container display-flex flex-direction-column justify-content-center align-item">
                <div className="register-header display-flex justfy-content-between">
                    <img className="logo" src={logo} alt="kenzie-hub-logo"/>
                    <a className="back-to-login display-flex justify-content-center align-item" href="/">Voltar</a>
                </div>
                <div className="register-box display-flex flex-direction-column justify-content-center align-item">
                    <h1>Crie sua conta</h1>
                    <p>Rapido e grátis, vamos nessa</p>
                    <RegisterForm/>
                </div>
            </StyledRegisterContainer>
        </StyledRegisterBg>
    )
}