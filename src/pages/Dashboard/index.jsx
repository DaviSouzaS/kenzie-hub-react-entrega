import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { request } from "../../services/api"
import { Header } from "../../components/Header"
import { StyledDahsboard } from "./style"

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
        
        <StyledDahsboard>
          <Header setUser = {setUser}/>

          <div className=" user-infos display-flex align-item">
                <div className="container mobile-container user-infos-box display-flex justfy-content-between">
                    <h1>Olá, {userInfos.name}</h1>
                    <p>{userInfos.course_module}</p>
                </div>
          </div>

            <main className="container mobile-container">
                <p className="waring-1">Que pena! Estamos em desenvolvimento :(</p>
                <p className="waring-2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </StyledDahsboard>
    )
}