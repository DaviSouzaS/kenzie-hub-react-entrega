import { Header } from "../../components/Header"
import { StyledDahsboard } from "./style"
import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Navigate } from "react-router-dom"
import { TechContext } from "../../contexts/TechContext"
import { TechItem } from "../../components/TechList"

export  function Dashboard () {

    const { user, loadingPage } = useContext (UserContext)
    const { teste } = useContext (TechContext)

    if (loadingPage) {
        return null
    }

    return user ?
       <StyledDahsboard>
          <Header/>

          <div className=" user-infos display-flex align-item">
                <div className="container mobile-container user-infos-box display-flex justfy-content-between">
                    <h1>Olá, {user.name}</h1>
                    <p>{user.course_module}</p>
                </div>
          </div>

            {
                user.techs.length === 0 ? 
            <main className="container mobile-container">
                <p className="waring-1">Que pena! Estamos em desenvolvimento :(</p>
                <p className="waring-2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main> : 
            <main className="container mobile-container tech-list-bg">
                <ul className="display-flex align-item flex-direction-column gap-16">
                {
                    user.techs.map(item => <TechItem key = {item.id} tech = {item}/>)
                }
                </ul>
            </main>
            }

        </StyledDahsboard>
        : 
        <Navigate to = '/'/>
    
}