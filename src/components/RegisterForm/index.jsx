import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { StyledInputBox } from "../Input/style"
import { StyledSelect, StyledSelectBox } from "./style"
import eyeIcon from "../../assets/eye-icon.svg"
import { request } from "../../services/api"
import { Input } from "../Input"
import { Button } from "../Button"
import * as yup from "yup"

export function RegisterForm () {

    const [showPassword, setShowPassword] = useState(false)
    console.log()
    const navigate = useNavigate()

    async function registerUser (data) {
        try {
            const response = await request.post("/users", data)
            navigate("/")
        } catch (error) { 
        }
    }

    const validate = yup.object().shape({
        name: yup.string().required("O nome é obrigatório")
        .min(3, "O nome precisa ter mais que 2 caracteres")
        .max(100, "O nome pode ter até 100 caracteres"),

        email: yup.string().required("O email é obrigatório")
        .email("É necessário fornecer um email"),

        password: yup.string().required("A senha é obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .min(8, "É necessário uma senha de no mínimo 8 caracteres"),

        confirm: yup.string().required("É necessário confirmar sua senha")
        .oneOf([yup.ref('password')], "As senhas não coincidem"),

        bio: yup.string().required("É necessário preencher este campo")
        .min(3, "O campo precisa ter mais que 2 caracteres")
        .max(200, "O campo pode ter até 200 caracteres"),

        contact: yup.string().required("É necessário preencher este campo")
        .min(3, "O campo precisa ter mais que 2 caracteres")
        .max(200, "O campo pode ter até 200 caracteres"),

        course_module: yup.string().required()
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

    function showPass() {
        setShowPassword(!showPassword)
    }

    return (
        <form className="form-box" onSubmit={handleSubmit(registerUser)} noValidate>

            <StyledInputBox>
            <Input label={"Nome"} type="text" id="name" placeholder="Digite aqui seu nome" register = {register("name")}/>
            {errors.name?.message && <p className ="input-waring">{errors.name.message}</p>}
            </StyledInputBox>

            <StyledInputBox>
            <Input label={"Email"} type="email" id="mail" placeholder="Digite aqui seu email" register = {register("email")}/>
            {errors.email?.message && <p className ="input-waring">{errors.email.message}</p>}
            </StyledInputBox>

            <StyledInputBox>
            <Input label={"Senha"} type={showPassword ? "text" : "password"} id="pass" placeholder="Digite aqui sua senha" register = {register("password")} btnShowPass = {<button className="show-pass-button" type="button" onClick={showPass}> <img src={eyeIcon} alt="eye-icon" /></button>}/>
            {errors.password?.message && <p className ="input-waring">{errors.password.message}</p>}
            </StyledInputBox>

            <StyledInputBox>
            <Input label={"Confirmar Senha"} type={showPassword ? "text" : "password"} id="confirm" placeholder="Digite novamente sua senha" register = {register("confirm")}/>
            {errors.confirm?.message && <p className ="input-waring">{errors.confirm.message}</p>}
            </StyledInputBox>

            <StyledInputBox>
            <Input label={"Bio"} type="text" id="bio" placeholder="Fale sobre você" register = {register("bio")}/>
            {errors.bio?.message && <p className ="input-waring">{errors.bio.message}</p>}
            </StyledInputBox>

            <StyledInputBox>
            <Input label={"Contato"} type="text" id="contact" placeholder="Opção de contato" register = {register("contact")}/> 
            {errors.contact?.message && <p className ="input-waring">{errors.contact.message}</p>}
            </StyledInputBox>

            <StyledSelectBox>
            <label className="label-select" htmlFor="module">Selecionar módulo</label>
            <StyledSelect className="display-flex justify-content-center">
                <select id="module" {...register("course_module")}>
                    <option value="Módulo 1">Módulo 1</option>
                    <option value="Módulo 2">Módulo 2</option>
                    <option value="Módulo 3">Módulo 3</option>
                    <option value="Módulo 4">Módulo 4</option>
                    <option value="Módulo 5">Módulo 5</option>
                    <option value="Módulo 6">Módulo 6</option>
                </select>
            </StyledSelect>
            </StyledSelectBox>
            <Button type = {"submit"} name = {"Cadastrar"}/>
        </form>
    )
}