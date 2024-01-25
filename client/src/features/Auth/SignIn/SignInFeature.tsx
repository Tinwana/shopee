import { FC } from "react";
import SignInForm from "./components/SignInForm";
import { SocialLogin } from "../components";

const SignInFeature: FC = () => {
  return (
    <div className="overflow-hidden px-[30px] pb-[30px]">
      <SignInForm />
      {/* social login */}
      <SocialLogin />
    </div>
  );
};

export default SignInFeature;
