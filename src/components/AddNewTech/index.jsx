import { TechContext } from "../../contexts/TechContext"
import { useContext } from "react"
import { Input } from "../Input"
import { Button } from "../Button"
import { StyledModalAddTech } from "./style"
import { StyledInputBox } from "../Input/style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


export function AddNewTech () {

    const { setModal, addNewTech } = useContext (TechContext)

    function closeModal () {
        setModal(false)
    }

    const validate = yup.object().shape({
        title: yup.string().required("Este campo é obrigatório")
        .max(20, "O campo pode ter até 20 caracteres"),
        status: yup.string().required()
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

    return (
            <StyledModalAddTech className="modal-add-tech">
                <div className="modal-header-box display-flex align-item justify-content-center">
                    <div className="modal-header display-flex align-item justfy-content-between">
                        <p>Cadastrar Tecnologia</p>
                        <button type="button" onClick={() => closeModal()}>X</button>
                    </div>
                </div>

                <div className="display-flex justify-content-center">
                    <form className="modal-form" onSubmit={handleSubmit(addNewTech)} noValidate>
                        <StyledInputBox>
                           <Input label={"Nome"} type="text" id="name" placeholder="Digite a tecnologia" register = {register("title")}/> 
                           {errors.title?.message && <p className="input-waring">{errors.title.message}</p>}
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
                        <Button name={"Cadastrar Tecnologia"} type = {"submit"}/>
                    </form>
                </div>
            </StyledModalAddTech>
    )
}