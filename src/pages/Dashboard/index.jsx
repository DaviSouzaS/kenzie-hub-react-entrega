import { Header } from "../../components/Header"
import { StyledDahsboard } from "./style"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Navigate } from "react-router-dom"
import { TechContext } from "../../contexts/TechContext"
import { TechItem } from "../../components/TechList"
import { ToastContainer } from "react-toastify"
import { TemplateModal } from "../../components/TemplateModal"

export  function Dashboard () {

    const { loadingPage, user } = useContext (UserContext)
    const { techList, modal, setModal } = useContext (TechContext)

    function openModal () {
        setModal(true)
    }

    if (loadingPage) {
        return null
    }

    return user ?
       <StyledDahsboard>
            {
             modal ? <TemplateModal/> : ''
            }
          <Header/>

          <div className=" user-infos display-flex align-item">
                <div className="container mobile-container user-infos-box display-flex justfy-content-between">
                    <h1>Olá, {user.name}</h1>
                    <p>{user.course_module}</p>
                </div>
          </div>

            {
            <div className="container tech-box">
                <div className="add-tech-box container mobile-container display-flex justfy-content-between align-item">
                    <p>Tecnologias</p>
                    <button type="button" onClick={() => openModal()}>+</button>
                </div>
                
                <main className="container mobile-container tech-list-bg">
                    { techList.length === 0 ? 
                    <div className="waring container mobile-container display-flex justify-content-center align-item gap-16">
                        <p className="display-flex">Para adcionar tecnologias clique no botão:</p>
                        <div>+</div>
                    </div>
                    :
                    <ul className="display-flex align-item flex-direction-column gap-16">
                    {
                        techList.map(item => <TechItem key = {item.id} tech = {item}/>)
                    }
                    </ul>
                    }
                </main>
            </div> 
            }
            <ToastContainer/>
        </StyledDahsboard>
        : 
        <Navigate to = "/"/>
    
}