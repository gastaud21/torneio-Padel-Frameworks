import { createContext, useContext } from "react";
import { useAuth } from "../useAuth";

const AuthContext = createContext({} as ReturnType<typeof useAuth>);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
