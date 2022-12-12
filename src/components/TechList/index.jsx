import { StyledTech } from "./style"
import { TechContext } from "../../contexts/TechContext"
import { useContext } from "react"
import trashIcon from "../../assets/trash-icon.svg"
import { UserContext } from "../../contexts/UserContext"
import spinner from "../../assets/spinner.svg"

export function TechItem ({tech}) {

    const { deleteTech } = useContext (TechContext)
    const { loading } = useContext (UserContext)

    return (
        <StyledTech className="display-flex justfy-content-between align-item"> 
            <h2>{tech.title}</h2> 
            <span className="display-flex gap-25">
                <p>{tech.status}</p>
                <button onClick={() => deleteTech(tech.id)}>
                <img src={trashIcon} alt="delete-button" />
                </button>
            </span>
        </StyledTech>
    )
}
