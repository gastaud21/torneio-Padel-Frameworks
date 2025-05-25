import axios from "axios";

const api = axios.create({
  baseURL: "https://match-padel-back-demo.onrender.com",
  //   timeout: 5000,
});

export async function getQuadras() {
  try {
    const response = await api.get("/quadra");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar quadras...", error);
    throw error;
  }
}
