import { useNavigate } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
import { Button } from "../../components/Button"
import logo from "../../assets/logo.svg"

export function RegisterPage () {

    const navigate = useNavigate()

    function redirectToLogin () {
        navigate("/")
    }

    return (
        <div>
            <div>
                <div>
                    <img src={logo} alt="kenzie-hub-logo"/>
                    <Button type = {"click"} name = {"Voltar"} redirect = {redirectToLogin}/>
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