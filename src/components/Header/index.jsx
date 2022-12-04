import logo from "../../assets/logo.svg"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom"

export function Header ({setUser}) {

    const navigate = useNavigate()

    function logout () {
        setUser([])
        window.localStorage.clear()
        navigate("/")
    }

    return (
        <header>
            <div>
                <img src={logo} alt="kenzie-hub-logo" />
                <Button type = {"button"} name = {"Sair"} redirect = {logout}/>
            </div>
        </header>
    )
}