import logo from "../../assets/logo.svg"
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
                <button type="button" onClick={logout}>Sair</button>
            </div>
        </header>
    )
}