import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../Input"
import { Button } from "../Button"
import { StyledInputBox } from "../Input/style"
import { ToastContainer } from "react-toastify"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import "react-toastify/dist/ReactToastify.css"
import eyeIcon from "../../assets/eye-icon.svg"
import spinner from "../../assets/spinner.svg"
import * as yup from "yup"


export function LoginForm () {

    const { loading, showPassword, showPass, login} = useContext (UserContext)

    const validate = yup.object().shape({
        email: yup.string().required("O email é obrigatório"),

        password: yup.string().required("A senha é obrigatória")
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

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
           
           <ToastContainer/>
        </form>
    )
}