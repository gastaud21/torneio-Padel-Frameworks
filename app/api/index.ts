import axios from "axios";
import { API_BASE_URL } from "../environments/environment";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Interceptor para adicionar token de autenticação, se necessário
api.interceptors.request.use(
  async (config) => {
    // Aqui você pode pegar o token do contexto ou de um store global
    const token = ""; // Pegue do contexto de auth, por exemplo
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aqui você pode lidar com erros globais (401, 500, etc.)
    return Promise.reject(error);
  }
);

export default api;
