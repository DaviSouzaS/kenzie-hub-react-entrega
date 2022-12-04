import { LoginForm } from "../../components/LoginForm"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import logo from "../../assets/logo.svg"

export function LoginPage ({setUser}) {

    const navigate = useNavigate()

    function redirectToRegister () {
        navigate("/registerPage")
    }

    return (
        <div>
            <div>
                <img src={logo} alt="kenzie-hub-logo" />
                <div>
                    <h1>Login</h1>
                    <LoginForm setUser = {setUser}/>
                    <p>Ainda não possui uma conta?</p>
                    <Button type={"button"} name = {"Cadastre-se"} redirect = {redirectToRegister}/>
                </div>
            </div>
        </div>
        
    )
}