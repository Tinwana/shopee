"use client";
import { createContext, useState } from "react";

type CartContextType = {};
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

  const value = {};

  return <CartContext.Provider value={value} {...props} />;
};

export default CartContextWrapper;
