import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { request } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProviders({ children }) {

  const [ techList, setTechList ] = useState([])
  const [ modal, setModal ] = useState(false)
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
      setModal(false)
      toastSuccessAddTech();
    } catch (error) {
        toastError()
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

  return (
    <TechContext.Provider value={{ deleteTech, techList, modal, setModal, addNewTech }}>
      {children}
    </TechContext.Provider>
  );
}
