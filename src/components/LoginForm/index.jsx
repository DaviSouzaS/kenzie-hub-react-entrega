import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { request } from "../../services/api"
import { useState } from "react"
import eyeIcon from "../../assets/eye-icon.svg"
import spinner from "../../assets/spinner.svg"
import * as yup from "yup"


export function LoginForm () {

    const [user, setUser] = useState([])
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
            //RETORNAR MENSAGEM DE ERRO  
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
        <form onSubmit={handleSubmit(login)}>
            <label htmlFor="email">Email</label>
            <div>
                <input type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
            </div>
            {errors.email?.message && <p>{errors.email.message}</p>}

            <label htmlFor="password">Senha</label>
            <div>
                <input type={showPassword ? "text" : "password"} id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
                <button type="button" onClick={showPass}> <img src={eyeIcon} alt="eye-icon" /> </button>
            </div>
            {errors.password?.message && <p>{errors.password.message}</p>}

            <button type="submit">{loading ? <><img src={spinner} alt="loading-icon" /></> : <>Entrar</>}</button>
            
        </form>
    )
}