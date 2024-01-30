"use client";
import { FC } from "react";
import { SocialLogin } from "../components";
import RegisterVerifyForm from "./components/RegisterVerifyForm";
import { useLogin } from "@/hooks";

const RegisterVerifyFeature: FC = () => {
  useLogin();
  return (
    <div className="overflow-hidden px-[30px] pb-[30px]">
      <RegisterVerifyForm />
      {/* social login */}
      <SocialLogin />
    </div>
  );
};

export default RegisterVerifyFeature;
