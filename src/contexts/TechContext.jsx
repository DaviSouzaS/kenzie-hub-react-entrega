import { createContext, useState, useContext } from "react";
import { request } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProviders({ children }) {

  const { user } = useContext (UserContext)

  const [techs, setTechs] = useState(user);

  async function deleteTech(techId) {
    const token = localStorage.getItem("@TOKEN");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await request.delete(`/users/techs/${techId}`, config);
    } catch (error) {}
  }

  return (
    <TechContext.Provider value={{ techs, setTechs }}>
        {children}
    </TechContext.Provider>
  );
}
