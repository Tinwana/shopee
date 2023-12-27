import AuthHeader from "@/features/Auth/components/layouts/AuthHeader/AuthHeader";
import { FC, ReactNode } from "react";

interface CartLayoutProps {
  children: ReactNode;
}

const SignInLayout: FC<CartLayoutProps> = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <div className="bg-[#ee4d2d] mt-[120px]">{children}</div>
    </>
  );
};

export default SignInLayout;
