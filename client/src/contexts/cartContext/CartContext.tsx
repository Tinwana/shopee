"use client";
import { createContext, useState } from "react";

type CartContextType = {
  cartTotalQty: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  isPayCartProducts: CartProductType[] | null;
  handleIncreasedQuantity: (id: string, quantity: number) => void;
};
interface Props {
  [propsName: string]: any;
}
export const CartContext = createContext<CartContextType | null>(null);
const CartContextWrapper = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState<number>(0);
  const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  const [isPayCartProducts, setIsPayCartProducts] = useState<
    CartProductType[] | null
  >(null);

  const handleIncreasedQuantity = (id: string, quantity: number) => {
    const product = cartProducts?.find((product) => product.id === id);
  };

  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    isPayCartProducts,
    handleIncreasedQuantity,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export default CartContextWrapper;
