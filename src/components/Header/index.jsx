import logo from "../../assets/logo.svg"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom"
import { StyledHeader } from "./styles"

export function Header ({setUser}) {

    const navigate = useNavigate()

    function logout () {
        setUser([])
        window.localStorage.clear()
        navigate("/")
    }

    return (
        <StyledHeader className="display-flex align-item">
            <div className="container mobile-container header-box display-flex justfy-content-between"> 
                <img src={logo} alt="kenzie-hub-logo" />
                <Button type = {"button"} name = {"Sair"} redirect = {logout}/>
            </div>
        </StyledHeader>
    )
}