import { Container, Header } from "@/components/layouts";
import { FC, ReactNode } from "react";

interface CartLayoutProps {
  children: ReactNode;
}

const CartLayout: FC<CartLayoutProps> = ({ children }) => {
  return (
    <>
      <Header cart />
      <Container>
        <div className="mt-[151.6px]">{children}</div>
      </Container>
    </>
  );
};

export default CartLayout;
