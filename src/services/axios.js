import axios from "axios";

export const getApiClient = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  return api;
};
