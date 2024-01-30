"use client";
import { FC } from "react";
import SignInForm from "./components/SignInForm";
import { SocialLogin } from "../components";
import { useLogin } from "@/hooks";

const SignInFeature: FC = () => {
  useLogin();
  return (
    <div className="overflow-hidden px-[30px] pb-[30px]">
      <SignInForm />
      {/* social login */}
      <SocialLogin />
    </div>
  );
};

export default SignInFeature;
