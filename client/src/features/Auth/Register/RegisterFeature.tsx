import { FC } from "react";
import { SocialLogin } from "../components";
import RegisterForm from "./components/RegisterForm";

interface RegisterFeatureProps {
  token: string;
}

const RegisterFeature: FC<RegisterFeatureProps> = ({ token }) => {
  return (
    <div className="overflow-hidden px-[30px] pb-[30px]">
      <RegisterForm token={token} />
      {/* social login */}
      <SocialLogin />
    </div>
  );
};

export default RegisterFeature;
