"use client";
import { Button, Input } from "@/components/ui";
import Link from "next/link";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
interface FormData {
  email: string;
  password: string;
}
interface SignInFormProps {
  onSubmit: SubmitHandler<FormData>;
}
const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [borderInputEmail, setBorderInputEmail] = useState(
    "border-[rgba(0,0,0,.14);]"
  );
  const [borderInputPassword, setBorderInputPassword] = useState(
    "border-[rgba(0,0,0,.14);]"
  );
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validate, setValidate] = useState({
    email: "",
    password: "",
    success: true,
  });
  const { register, handleSubmit } = useForm<FormData>();

  //handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignInData({ ...signInData, [e.target.id]: e.target.value });
  };

  const handleValidate = (options: { type: string; message: string }) => {
    setValidate({
      ...validate,
      [options.type]: options.message,
      success: options.message === "" ? true : false,
    });
  };
  console.log(validate);
  return (
    <>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[10px]  ">
          <div
            className={`w-full h-[2.5rem] overflow-hidden border-[1px] ${borderInputEmail} rounded-[2px] shadow-sm flex items-center `}
          >
            <Input
              id="email"
              onFocus={() => {
                setBorderInputEmail("border-[rgba(0,0,0,.54);]");
              }}
              onBlur={() => {
                if (signInData.email == "")
                  handleValidate({
                    type: "email",
                    message: "Vui lòng điền vào mục này.",
                  });
                else if (!isEmail.test(signInData.email))
                  handleValidate({
                    type: "email",
                    message: "Email không hợp lệ!",
                  });
                else {
                  handleValidate({
                    type: "email",
                    message: "",
                  });
                }
                setBorderInputEmail("border-[rgba(0,0,0,.14);]");
              }}
              onChange={handleChange}
              placeholder="Email/Số điện thoại/Tên đăng nhập"
              autoComplete="on"
              maxLength={128}
              type="text"
              value={signInData.email}
            />
          </div>
          <div
            aria-live="polite"
            className="m-0 pt-[0.25rem] text-[.75rem] text-[#ff424f] min-h-[1rem] "
          >
            {validate.email}
          </div>
        </div>
        <div className="mb-[14px]">
          <div
            className={`w-full h-[2.5rem] overflow-hidden border-[1px] ${borderInputPassword} rounded-[2px] shadow-sm flex items-center `}
          >
            <Input
              id="password"
              className="flex-1 shrink-0 filter-none border-0 outline-[0px] focus:outline-[0] focus:border-0"
              onFocus={() => {
                setBorderInputPassword("border-[rgba(0,0,0,.54);]");
              }}
              onBlur={() => {
                if (signInData.password == "")
                  handleValidate({
                    type: "password",
                    message: "Vui lòng điền vào mục này.",
                  });
                else if (signInData.password.length < 6)
                  handleValidate({
                    type: "password",
                    message: "Mật khẩu phải có 6 từ trở lên!",
                  });
                else {
                  handleValidate({
                    type: "password",
                    message: "",
                  });
                }
                setBorderInputPassword("border-[rgba(0,0,0,.14);]");
              }}
              onChange={handleChange}
              placeholder="Mật khẩu"
              autoComplete="on"
              maxLength={128}
              type={!showPassword ? "password" : "text"}
              value={signInData.password}
            />

            {showPassword ? (
              <button
                className="bg-transparent border-none outline-none pl-[.75rem] pr-[.9375rem] flex items-center "
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <FaRegEye />
              </button>
            ) : (
              <button
                className="bg-transparent border-none outline-none pl-[.75rem] pr-[.9375rem] flex items-center "
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <RiEyeCloseLine />
              </button>
            )}
          </div>
          <div
            aria-live="polite"
            className="m-0 pt-[0.25rem] text-[.75rem] text-[#ff424f] min-h-[1rem] "
          >
            {validate.password}
          </div>
        </div>
        <Button
          disabled={
            signInData.email === "" || signInData.password === "" ? true : false
          }
          variant="destructive"
          className="disabled:opacity-60 w-full rounded-[2px]"
        >
          Đăng nhập
        </Button>
      </form>
      <div className="my-[10px] flex justify-between">
        <Link className="text-[#05a] text-[.75rem] " href={"#"}>
          Quên mật khẩu
        </Link>
        <Link className="text-[#05a] text-[.75rem] " href={"#"}>
          Đăng nhập với SMS
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
