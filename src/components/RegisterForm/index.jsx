import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { request } from "../../services/api"
import * as yup from "yup"

export function RegisterForm () {

    const navigate = useNavigate()

    async function registerUser (data) {
        try {
            const response = await request.post("/users", data)
            navigate("/")
        } catch (error) { 
            //RETORNAR MENSAGEM DE ERRO  
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

        course_module: yup.string().required("É necessário escolher um módulo")
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

    return (
        <form onSubmit={handleSubmit(registerUser)} noValidate>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Digite aqui seu nome" {...register("name")}/>
            {errors.name?.message && <p>{errors.name.message}</p>}

            <label htmlFor="mail">Email</label>
            <input type="email" id="mail" placeholder="Digite aqui seu email" {...register("email")}/>
            {errors.email?.message && <p>{errors.email.message}</p>}

            <label htmlFor="pass">Senha</label>
            <input type="password" id="pass" placeholder="Digite aqui sua senha" {...register("password")}/>
            {errors.password?.message && <p>{errors.password.message}</p>}

            <label htmlFor="confirm">Confirmar Senha</label>
            <input type="password" id="confirm" placeholder="Digite novamente sua senha" {...register("confirm")}/>
            {errors.confirm?.message && <p>{errors.confirm.message}</p>}

            <label htmlFor="bio">Bio</label>
            <input type="text" id="bio" placeholder="Fale sobre você" {...register("bio")}/>
            {errors.bio?.message && <p>{errors.bio.message}</p>}

            <label htmlFor="contact">Contato</label>
            <input type="text" id="contact" placeholder="Opção de contato" {...register("contact")}/>
            {errors.contact?.message && <p>{errors.contact.message}</p>}

            <label htmlFor="module">Selecionar módulo</label>
            <select id="module" {...register("course_module")}>
                <option value="Modulo-1">Módulo 1</option>
                <option value="Modulo-2">Módulo 2</option>
                <option value="Modulo-3">Módulo 3</option>
                <option value="Modulo-4">Módulo 4</option>
                <option value="Modulo-5">Módulo 5</option>
                <option value="Modulo-6">Módulo 6</option>
            </select>
            {errors.course_module?.message && <p>{errors.course_module.message}</p>}

            <button type="submit">Cadastrar</button>
        </form>
    )
}