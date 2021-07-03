import axios from "axios";
import { toast } from "react-toastify";

export const getApiClient = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (!error.response) {
        toast.error(
          "😭 Ocorreu um erro de conexão, verifique sua internet ou tente novamente mais tarde.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }

      return Promise.reject(error);
    }
  );

  return api;
};
