import { StyledModal } from "./style"
import { AddNewTech } from "../AddNewTech"
import { EditTech } from "../EditTech"
import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"

export function TemplateModal () {

    const {modalAddTech, modalEditTech } = useContext (TechContext)

    return (
        <StyledModal className="display-flex justify-content-center align-item">
            {
                modalAddTech ? <AddNewTech/> : ""
            }
            {
                modalEditTech ? <EditTech/> : ""
            }
        </StyledModal>
    )
}