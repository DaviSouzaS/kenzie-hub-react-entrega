import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { request } from "../services/api";
import { useEffect } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  const navigate = useNavigate();

  async function login(data) {
    try {
      setLoading(true);
      const response = await request.post("/sessions", data);
      setUser(response.data.user);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      setLoading(false);
      toastSuccessLogin();
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setLoading(false);
      toastError();
    }
  }

  async function registerUser(data) {
    try {
      const response = await request.post("/users", data);
      toastSuccessRegister();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toastError();
    }
  }

  function showPass() {
    setShowPassword(!showPassword);
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

  function toastSuccessRegister() {
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

  useEffect(() => {

    async function verifyingToken () {

    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoadingPage(false)
      return
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await request.get("/profile", config);
      setUser(response.data);
    } catch (error) {
      window.localStorage.clear();
    } finally {
      setLoadingPage(false)
    }
    }
    
    verifyingToken()
  }, []);

  function logout() {
    setUser(null);
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        showPassword,
        showPass,
        loading,
        setLoading,
        loadingPage,
        login,
        registerUser,
        logout,
        user,
        toastError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
