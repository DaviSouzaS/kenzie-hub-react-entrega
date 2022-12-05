import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { request } from "../../services/api"
import { useState } from "react"
import { Input } from "../Input"
import { Button } from "../Button"
import { StyledInputBox } from "../Input/style"
import eyeIcon from "../../assets/eye-icon.svg"
import spinner from "../../assets/spinner.svg"
import * as yup from "yup"

export function LoginForm ({setUser}) {

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    async function login (data) {
        try {
            setLoading(true)
            const response = await request.post("/sessions", data) 
            setUser(response.data.user) 
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", response.data.token) 
            window.localStorage.setItem("@USERID", response.data.user.id) 
            setLoading(false)
            navigate("/dashboard")
        } catch (error){
            setLoading(false)
        }
    }

    const validate = yup.object().shape({
        email: yup.string().required("O email é obrigatório"),

        password: yup.string().required("A senha é obrigatória")
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

    function showPass() {
        setShowPassword(!showPassword)
    }

    return (
        <form className="form-box form-login" onSubmit={handleSubmit(login)}>
        
            <StyledInputBox>
                <Input label={"Email"} type="email" id="email" placeholder="Digite aqui seu email" register = {register("email")}/> 
                {errors.email?.message && <p className="input-waring">{errors.email.message}</p>} 
            </StyledInputBox>
            
            <StyledInputBox>
                <Input label={"Senha"} type={showPassword ? "text" : "password"} id="password" placeholder="Digite aqui sua senha" register = {register("password")} btnShowPass = {<button className="show-pass-button" type="button" onClick={showPass}> <img src={eyeIcon} alt="eye-icon" /></button>}/>
                {errors.password?.message && <p className="input-waring">{errors.password.message}</p>}
            </StyledInputBox>

            <Button type={"submit"} name = {loading ? <><img className="loading-icon" src={spinner} alt="loading-icon" /></> : <>Entrar</>}/>
           
        </form>
    )
}