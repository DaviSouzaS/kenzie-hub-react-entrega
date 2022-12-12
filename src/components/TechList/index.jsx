import { StyledTech } from "./style"
import trashIcon from "../../assets/trash-icon.svg"

export function TechItem ({tech}) {

    return (
        <StyledTech className="display-flex justfy-content-between align-item"> 
            <h2>{tech.title}</h2> 
            <span className="display-flex gap-25">
                <p>{tech.status}</p>
                <button>
                    <img src={trashIcon} alt="delete-button" />
                </button>
            </span>
        </StyledTech>
    )
}