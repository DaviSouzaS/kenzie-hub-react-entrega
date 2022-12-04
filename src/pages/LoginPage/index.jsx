import { LoginForm } from "../../components/LoginForm"
import logo from "../../assets/logo.svg"

export function LoginPage ({setUser}) {

    return (
        <div>
            <div>
                <img src={logo} alt="kenzie-hub-logo" />
                <div>
                    <h1>Login</h1>
                    <LoginForm setUser = {setUser}/>
                    <p>Ainda não possui uma conta?</p>
                    <a href="/registerPage">Cadastre-se</a>
                </div>
            </div>
        </div>
    )
}