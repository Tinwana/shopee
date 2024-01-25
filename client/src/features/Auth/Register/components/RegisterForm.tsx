"use client";
import { Button, Input } from "@/components/ui";
import { FC, FormEvent, useState } from "react";
import { ValidateForm } from "../../components";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import validator from "@/lib/validator";

interface FormData {
  name: string;
  password: string;
  verifyPassword: string;
  phoneNumber: string;
}

const RegisterForm: FC = () => {
  const onSubmit = (e: FormEvent) => {
    // Handle login logic here
    e.preventDefault();
    if (
      validate.name === "" &&
      validate.password === "" &&
      validate.phoneNumber === "" &&
      validate.verifyPassword === ""
    ) {
      console.log("Login data:", registerData);
    }
  };
  const [borderInput, setBorderInput] = useState({
    name: "border-[rgba(0,0,0,.14);]",
    password: "border-[rgba(0,0,0,.14);]",
    verifyPassword: "border-[rgba(0,0,0,.14);]",
    phoneNumber: "border-[rgba(0,0,0,.14);]",
  });
  const [registerData, setRegisterData] = useState<FormData>({
    name: "",
    password: "",
    verifyPassword: "",
    phoneNumber: "",
  });
  const [validate, setValidate] = useState({
    name: "",
    password: "",
    verifyPassword: "",
    phoneNumber: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  //handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form className="" onSubmit={onSubmit}>
        <div className="mb-[10px]  ">
          <div
            className={`w-full h-[2.5rem] overflow-hidden border-[1px] ${borderInput.name} rounded-[2px] shadow-sm flex items-center `}
          >
            <Input
              id="name"
              onFocus={() => {
                setBorderInput({
                  ...borderInput,
                  name: "border-[rgba(0,0,0,.54);]",
                });
              }}
              onBlur={() => {
                setValidate({
                  ...validate,
                  name: validator.required(registerData.name),
                });
                setBorderInput({
                  ...borderInput,
                  name: "border-[rgba(0,0,0,.14);]",
                });
              }}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="on"
              maxLength={128}
              type="text"
              value={registerData.name}
            />
          </div>
          <ValidateForm message={validate.name} />

          <div
            className={`w-full h-[2.5rem] overflow-hidden border-[1px] ${borderInput.password} rounded-[2px] shadow-sm flex items-center `}
          >
            <Input
              id="password"
              className="flex-1 shrink-0 filter-none border-0 outline-[0px] focus:outline-[0] focus:border-0"
              onFocus={() => {
                setBorderInput({
                  ...borderInput,
                  password: "border-[rgba(0,0,0,.54);]",
                });
              }}
              onBlur={() => {
                setValidate({
                  ...validate,
                  password: validator.min(registerData.password),
                });
                setBorderInput({
                  ...borderInput,
                  password: "border-[rgba(0,0,0,.14);]",
                });
              }}
              onChange={handleChange}
              placeholder="Mật khẩu"
              autoComplete="on"
              maxLength={128}
              type={!showPassword ? "password" : "text"}
              value={registerData.password}
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

          <div
            className={`w-full h-[2.5rem] overflow-hidden border-[1px] ${borderInput.verifyPassword} rounded-[2px] shadow-sm flex items-center `}
          >
            <Input
              id="verifyPassword"
              className="flex-1 shrink-0 filter-none border-0 outline-[0px] focus:outline-[0] focus:border-0"
              onFocus={() => {
                setBorderInput({
                  ...borderInput,
                  verifyPassword: "border-[rgba(0,0,0,.54);]",
                });
              }}
              onBlur={() => {
                if (registerData.password !== registerData.verifyPassword) {
                  setValidate({
                    ...validate,
                    verifyPassword: "Mật khẩu phải giống nhau!",
                  });
                } else {
                  setValidate({
                    ...validate,
                    verifyPassword: "",
                  });
                }
                setBorderInput({
                  ...borderInput,
                  verifyPassword: "border-[rgba(0,0,0,.14);]",
                });
              }}
              onChange={handleChange}
              placeholder="Enter your password again..."
              autoComplete="on"
              maxLength={128}
              type={!showPassword ? "password" : "text"}
              value={registerData.verifyPassword}
            />
          </div>
          <ValidateForm message={validate.verifyPassword} />

          <div
            className={`w-full h-[2.5rem] overflow-hidden border-[1px] ${borderInput.phoneNumber} rounded-[2px] shadow-sm flex items-center `}
          >
            <Input
              id="phoneNumber"
              onFocus={() => {
                setBorderInput({
                  ...borderInput,
                  phoneNumber: "border-[rgba(0,0,0,.54);]",
                });
              }}
              onBlur={() => {
                setValidate({
                  ...validate,
                  phoneNumber: validator.required(registerData.phoneNumber),
                });
                setBorderInput({
                  ...borderInput,
                  phoneNumber: "border-[rgba(0,0,0,.14);]",
                });
              }}
              onChange={handleChange}
              placeholder="Your phone number"
              autoComplete="on"
              maxLength={128}
              type="tel"
              value={registerData.phoneNumber}
            />
          </div>

          <ValidateForm message={validate.phoneNumber} />
        </div>
        <Button
          disabled={
            registerData.name === "" ||
            registerData.password === "" ||
            registerData.phoneNumber === "" ||
            registerData.verifyPassword === ""
              ? true
              : false
          }
          variant="destructive"
          className="disabled:opacity-60 w-full rounded-[2px]"
        >
          Đăng ký
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
