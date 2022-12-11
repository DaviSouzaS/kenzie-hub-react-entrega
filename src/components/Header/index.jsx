import logo from "../../assets/logo.svg"
import { Button } from "../Button"
import { StyledHeader } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export function Header () {

    const { logout } = useContext (UserContext)
    
    return (
        <StyledHeader className="display-flex align-item">
            <div className="container mobile-container header-box display-flex justfy-content-between"> 
                <img src={logo} alt="kenzie-hub-logo" />
                <Button type = {"button"} name = {"Sair"} redirect = {logout}/>
            </div>
        </StyledHeader>
    )
}