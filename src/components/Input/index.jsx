import { StyledInput } from "./style"

export function Input ({label, type, id, placeholder, register, btnShowPass}) {

    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <div className="input-default display-flex justify-content-center">
                <input type={type} id={id} placeholder={placeholder} {...register}/>
                {btnShowPass}
            </div>
        </StyledInput>
    )
}