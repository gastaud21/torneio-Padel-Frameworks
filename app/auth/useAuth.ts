import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/client";
import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await api.post("usuario/login", { email, password });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      return true;
    } catch (error) {
      console.error("Login error", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
  };

  const getToken = async () => {
    return await AsyncStorage.getItem("token");
  };

  return { login, logout, getToken, loading };
};
