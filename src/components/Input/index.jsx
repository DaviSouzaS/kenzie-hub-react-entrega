export function Input ({label, type, id, placeholder, register, btnShowPass}) {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div>
                <input type={type} id={id} placeholder={placeholder} {...register}/>
                {btnShowPass}
            </div>
        </div>
    )
}