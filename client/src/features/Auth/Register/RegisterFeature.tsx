import { FC } from "react";
import { SocialLogin } from "../components";
import RegisterForm from "./components/RegisterForm";

const RegisterFeature: FC = () => {
  return (
    <div className="overflow-hidden px-[30px] pb-[30px]">
      <RegisterForm />
      {/* social login */}
      <SocialLogin />
    </div>
  );
};

export default RegisterFeature;
