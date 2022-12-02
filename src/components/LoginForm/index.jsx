import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export function LoginForm () {

    function submit (data) {
        console.log(data)
    }

    const validate = yup.object().shape({
        email: yup.string().required("O email é obrigatório"),

        password: yup.string().required("A senha é obrigatória")
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
            {errors.email?.message && <p>{errors.email.message}</p>}

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
            {errors.password?.message && <p>{errors.password.message}</p>}

            <button type="submit">Entrar</button>

            <p>Ainda não possui uma conta?</p>

            <button type="click">Cadastre-se</button>
        </form>
    )
}