import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { request } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProviders({ children }) {

  const [ techList, setTechList ] = useState([])

  const { toastError, setLoading } = useContext (UserContext)

  async function deleteTech(techId) {
    const token = localStorage.getItem("@TOKEN");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      setLoading(true);
      const response = await request.delete(`/users/techs/${techId}`, config);
      setLoading(false)
      toastSuccessDelete();
    } catch (error) {
        toastError()
    }
  }

  async function getNewUserInfos() {

    const token = localStorage.getItem("@TOKEN");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await request.get("/profile", config);
      setTechList(response.data.techs)
    } catch (error) {}
  }

  getNewUserInfos()

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

  return (
    <TechContext.Provider value={{ deleteTech, techList }}>
      {children}
    </TechContext.Provider>
  );
}
