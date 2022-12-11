import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { request } from "../services/api"

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfos, setUserInfos] = useState([])

  const navigate = useNavigate();

  async function login (data) {
    try {
        setLoading(true)
        const response = await request.post("/sessions", data) 
        setUser(response.data.user) 
        window.localStorage.clear()
        window.localStorage.setItem("@TOKEN", response.data.token) 
        window.localStorage.setItem("@USERID", response.data.user.id) 
        setLoading(false)
        toastSuccessLogin()
        setTimeout(() => {
            navigate("/dashboard")
        }, 2000);
    } catch (error){
        setLoading(false)
        toastError()
    }
  }

  async function registerUser (data) {
    try {
        const response = await request.post("/users", data)
        toastSuccessRegister()
        setTimeout(() => {
            navigate("/")
        }, 2000);
    } catch (error) { 
        toastError()
    }
  }

  function showPass() {
    setShowPassword(!showPassword)
  }

  function toastError() {
    toast.error("Ops! Algo deu errado", {
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

  function toastSuccessLogin() {
    toast.success("Login realizado com sucesso!", {
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

  function toastSuccessRegister () {
    toast.success("Conta criada com sucesso!", {
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

    function restriction (token) {
    if (token === null) {
        navigate("/")
    }
    }

   function logout () {
    setUser([])
    window.localStorage.clear()
    navigate("/")
    }

  return (
    <UserContext.Provider
      value={{
        showPassword,
        showPass,
        loading,
        setLoading,
        userInfos, 
        getUserInfos,
        restriction,
        login,
        registerUser,
        logout
      }}>
      {children}
    </UserContext.Provider>
  );
}
