import { Header } from "@/components/layouts";
import { FC, ReactNode } from "react";

interface CartLayoutProps {
  children: ReactNode;
}

const CartLayout: FC<CartLayoutProps> = ({ children }) => {
  return (
    <>
      <Header cart />
      {children}
    </>
  );
};

export default CartLayout;
