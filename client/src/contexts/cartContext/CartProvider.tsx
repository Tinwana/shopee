"use client";
import React, { FC, ReactNode } from "react";
import CartContextWrapper from "./CartContext";

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  return <CartContextWrapper>{children}</CartContextWrapper>;
};

export default CartProvider;
