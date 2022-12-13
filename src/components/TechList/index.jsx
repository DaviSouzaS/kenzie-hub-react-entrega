import { StyledTech } from "./style"
import { TechContext } from "../../contexts/TechContext"
import { useContext } from "react"
import trashIcon from "../../assets/trash-icon.svg"

export function TechItem ({tech}) {
    const { deleteTech, setModalEditTech, setTechId, setTechItems } = useContext (TechContext)

    function openModal (techId) {
        setModalEditTech(true)
        setTechId(techId)
        setTechItems(tech)
    }

    return (
        <StyledTech className="display-flex justfy-content-between align-item"> 
            <div onClick={() => openModal(tech.id)} className="card-body display-flex align-item">
                <h2>{tech.title}</h2>
            </div> 
            <span className="display-flex gap-25">
                <p>{tech.status}</p>
                <button onClick={() => deleteTech(tech.id)}>
                <img src={trashIcon} alt="delete-button" />
                </button>
            </span>
        </StyledTech>
    )
}
