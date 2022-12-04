import { useNavigate } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
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
                    <button type="click" onClick={redirectToLogin}>Voltar</button>
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