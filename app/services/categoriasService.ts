import axios from "axios";

const api = axios.create({
  // baseURL: "https://match-padel-back-demo.onrender.com",
  baseURL: "http://localhost:8060/",

  //   timeout: 5000,
});

export async function getCategorias() {
  try {
    const response = await api.get("/categorias");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar quadras...", error);
    throw error;
  }
}
