import { CartContext } from "@/contexts/cartContext";
import { useContext } from "react";

const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("Provider is required!");
  }
  return context;
};
export default useCart;
