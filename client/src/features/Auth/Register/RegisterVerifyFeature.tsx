"use client";
import { FC, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { SocialLogin } from "../components";
import RegisterVerifyForm from "./components/RegisterVerifyForm";

const RegisterVerifyFeature: FC = () => {
  return (
    <div className="overflow-hidden px-[30px] pb-[30px]">
      <RegisterVerifyForm />
      {/* social login */}
      <SocialLogin />
    </div>
  );
};

export default RegisterVerifyFeature;
