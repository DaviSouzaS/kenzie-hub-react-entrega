import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { request } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProviders({ children }) {

  const [ techList, setTechList ] = useState([])
  const [ techId, setTechId ] = useState([])
  const [ techItems, setTechItems ] = useState([])
  const [ modalAddTech, setModalAddTech ] = useState(false)
  const [ modalEditTech, setModalEditTech ] = useState(false)
  const { toastError, setLoading } = useContext (UserContext)

  async function deleteTech(techId) {
    const token = localStorage.getItem("@TOKEN");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      setLoading(true);
      const response = await request.delete(`/users/techs/${techId}`, config);
      setLoading(false);
      toastSuccessDelete();
    } catch (error) {
        toastError();
    }
  }

  async function getNewUserInfos() {

    const token = localStorage.getItem("@TOKEN");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const response = await request.get("/profile", config);
      setTechList(response.data.techs)
    } catch (error) {}
  }

  getNewUserInfos()

  async function addNewTech (data) {
    const token = localStorage.getItem("@TOKEN");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      setLoading(true);
      const response = await request.post(`/users/techs`, data, config);
      setLoading(false)
      setModalAddTech(false)
      toastSuccessAddTech();
    } catch (error) {
        toastError()
    }
  }

  async function editTech(techId, data) {
    const token = localStorage.getItem("@TOKEN");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      setLoading(true);
      setModalEditTech(false)
      const response = await request.put(`/users/techs/${techId}`, data, config);
      setLoading(false);
      toastSuccessEditTech();
    } catch (error) {
        toastError();
    }
  }

  function toastSuccessDelete() {
    toast.success("Tech apagada com sucesso!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function toastSuccessAddTech() {
    toast.success("Tech criada com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function toastSuccessEditTech() {
    toast.success("Tech editada com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <TechContext.Provider
     value={{ 
      deleteTech, 
      techList, 
      modalAddTech, 
      setModalAddTech, 
      addNewTech, 
      modalEditTech, 
      setModalEditTech, 
      editTech, 
      setTechId, 
      techId, 
      techItems, 
      setTechItems
      }}>
      {children}
    </TechContext.Provider>
  );
}
