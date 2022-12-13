import { TechContext } from "../../contexts/TechContext"
import { useContext } from "react"
import { Input } from "../Input"
import { Button } from "../Button"
import { StyledInputBox } from "../Input/style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export function EditTech () {
    const { setModalEditTech, techId, editTech, techItems } = useContext (TechContext)

    function closeModal () {
        setModalEditTech(false)
    }

    function changeTechInfos (data) {
        editTech(techId, data)
    }

    const validate = yup.object().shape({
        status: yup.string().required()
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

    return (
            <div className="modal-tech">
                <div className="modal-header-box display-flex align-item justify-content-center">
                    <div className="modal-header display-flex align-item justfy-content-between">
                        <p>Editar Tecnologia</p>
                        <button type="button" onClick={() => closeModal()}>X</button>
                    </div>
                </div>

                <div className="display-flex justify-content-center">
                    <form className="modal-form" onSubmit={handleSubmit(changeTechInfos)} noValidate>
                        <StyledInputBox>
                           <Input label={"Nome"} type="text" id="name" placeholder="Digite a tecnologia" disabled = {true} value = {techItems.title}/>
                        </StyledInputBox>

                        <div className="set-status-box">
                            <label htmlFor="status">Selecionar status</label>
                            <div className="select-box display-flex justify-content-center">
                                <select id="status" {...register("status")}>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                            </div>
                        </div>
                        <Button name={"Salvar Alterações"} type ={"submit"}/>
                    </form>
                </div>
            </div>
    )
}