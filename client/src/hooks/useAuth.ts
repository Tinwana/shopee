import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("Provider is required!");
  }
  return context;
};
export default useAuth;
