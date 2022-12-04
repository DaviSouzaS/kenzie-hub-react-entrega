import { RegisterForm } from "../../components/RegisterForm"
import logo from "../../assets/logo.svg"

export function RegisterPage () {

    return (
        <div>
            <div>
                <div>
                    <img src={logo} alt="kenzie-hub-logo"/>
                    <a href="/">Voltar</a>
                </div>
                <div>
                    <h1>Crie sua conta</h1>
                    <p>Rapido e grátis, vamos nessa</p>
                    <RegisterForm/>
                </div>
            </div>
        </div>
    )
}