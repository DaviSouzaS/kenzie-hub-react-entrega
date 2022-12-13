import { StyledModal } from "./style"
import { AddNewTech } from "../AddNewTech"


export function TemplateModal () {

    return (
        <StyledModal className="display-flex justify-content-center align-item">
            <AddNewTech/>
        </StyledModal>
    )
}