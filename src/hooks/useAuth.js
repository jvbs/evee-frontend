import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
import history from "../utils/history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (email, senha) => {
    try {
      const {
        data: { token },
      } = await api.post("/auth", { email, senha });

      localStorage.setItem("token", JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);

      history.push("/admin");
    } catch (err) {
      const { message } = JSON.parse(err.request.response);
      // show toast
      toast.error(`🦄 ${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    setAuthenticated(false);

    history.push("/user/account/login");
  };

  return { authenticated, loading, handleLogin, handleLogout };
}
