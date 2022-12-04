import { useEffect, useState } from "react"
import { request } from "../../services/api"

export  function Dashboard () {

    const [userInfos, setUserInfos] = useState([])

    useEffect(() => {
        async function getUserInfos () {
            const token = localStorage.getItem("@TOKEN")
    
            const config = {
               headers: { Authorization : `Bearer ${token}`}
            }
    
            try {
                const response = await request.get("/profile", config)
                setUserInfos(response.data)
            } catch (error) {
                console.log(error)
            }
    
        }
    
        getUserInfos()
    }, [])
    
    return (
        
        <div>
          <p>Olá, {userInfos.name}</p>
          <p>{userInfos.course_module}</p>
        </div>
    )
}