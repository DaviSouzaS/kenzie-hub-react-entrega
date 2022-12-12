import { Header } from "../../components/Header"
import { StyledDahsboard } from "./style"
import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Navigate } from "react-router-dom"

export  function Dashboard () {

    const {userInfos, getUserInfos, user, loadingPage} = useContext (UserContext)

    useEffect(() => {
        getUserInfos()
    }, [])

    if (loadingPage) {
        return null
    }
    
    return user ?
       <StyledDahsboard>
          <Header/>

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
        : 
        <Navigate to = '/'/>
    
}