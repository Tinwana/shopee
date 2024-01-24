"use client";
import { FC, useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import SignInForm from "./components/SignInForm";
import Link from "next/link";
import { SocialLogin } from "../components";

interface FormData {
  email: string;
  password: string;
}

const SignInFeature: FC = () => {
  const onSubmit: SubmitHandler<FormData> = useCallback((data) => {
    // Handle login logic here
    console.log("Login data:", data);
  }, []);

  return (
    <div className="overflow-hidden px-[30px] pb-[30px]">
      <SignInForm onSubmit={onSubmit} />
      {/* social login */}
      <SocialLogin />
    </div>
  );
};

export default SignInFeature;
