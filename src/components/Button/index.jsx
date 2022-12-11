export function Button ({type, name, redirect}) {
    return (   
        <button type={type} onClick = {redirect}>{name}</button>
    )
}