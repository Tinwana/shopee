"use client";
import { Button, Input } from "@/components/ui";
import Link from "next/link";
import { FC, FormEvent, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { ValidateForm } from "../../components";
import validator from "@/lib/validator";
interface FormData {
  email: string;
  password: string;
}
const SignInForm: FC = () => {
  const onSubmit = (e: FormEvent) => {
    // Handle login logic here
    e.preventDefault();
    if (validate.email === "" && validate.password === "") {
      console.log("Login data:", signInData);
    }
  };
  const [borderInputEmail, setBorderInputEmail] = useState(
    "border-[rgba(0,0,0,.14);]"
  );
  const [borderInputPassword, setBorderInputPassword] = useState(
    "border-[rgba(0,0,0,.14);]"
  );
  const [signInData, setSignInData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validate, setValidate] = useState({
    email: "",
    password: "",
  });

  //handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignInData({ ...signInData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form className="" onSubmit={onSubmit}>
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
                setValidate({
                  ...validate,
                  email:
                    validator.required(signInData.email) ||
                    validator.isEmail(signInData.email),
                });
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
          <ValidateForm message={validate.email} />
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
                setValidate({
                  ...validate,
                  password: validator.min(signInData.password),
                });
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
          <ValidateForm message={validate.password} />
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
