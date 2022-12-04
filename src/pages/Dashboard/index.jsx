import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { request } from "../../services/api"
import { Header } from "../../components/Header"

export  function Dashboard ({setUser}) {

    const navigate = useNavigate()

    const [userInfos, setUserInfos] = useState([])

    useEffect(() => {
        async function getUserInfos () {
            const token = localStorage.getItem("@TOKEN")

            restriction(token)

            const config = {
               headers: { Authorization : `Bearer ${token}`}
            }
    
            try {
                const response = await request.get("/profile", config)
                setUserInfos(response.data)
            } catch (error) {
            }
        }
    
        getUserInfos()
    }, [])

    function restriction (token) {
        if (token === null) {
            navigate("/")
        }
    }
    
    return (
        
        <div>
          <Header setUser = {setUser}/>

          <div>
                <p>Olá, {userInfos.name}</p>
                <p>{userInfos.course_module}</p>
          </div>

            <main>
                <p>Que pena! Estamos em desenvolvimento :(</p>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </div>
    )
}