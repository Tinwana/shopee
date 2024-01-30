"use client";
import { Button, Input } from "@/components/ui";
import Link from "next/link";
import { FC, FormEvent, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { ValidateForm } from "../../components";
import validator from "@/lib/validator";
import { getAccountData, getUserData, postLoginCredentials } from "@/services";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import useAuth from "@/hooks/useAuth";
export type SignInUserType = {
  email: string;
  password: string;
};
const SignInForm: FC = () => {
  const { handleUpdate } = useAuth();
  const router = useRouter();
  const onSubmit = async (e: FormEvent) => {
    // Handle login logic here
    e.preventDefault();
    if (validate.email === "" && validate.password === "") {
      try {
        const res = await postLoginCredentials(signInData);
        if (res?.status === "success") {
          const authDecode: any = jwtDecode(res?.accessToken);
          const userData = await getUserData(authDecode?.payload?.userId);
          const accountData = await getAccountData(authDecode?.payload?.id);
          handleUpdate({
            name: accountData?.data?.userName,
            userId: userData?.data?.id,
            accountId: accountData?.data?.id,
            email: userData?.data?.email,
            phoneNumber: accountData?.data?.AccountPhoneNumber,
            accessToken: accountData?.data?.accessToken || "",
            role: accountData?.data?.role,
            avatar: accountData?.data?.avatar || "",
            verifyEmail: accountData?.data?.verify,
          });
          toast.success(res?.message);
          router.push("/");
        } else {
          toast.error(res?.message);
        }
      } catch (error) {
        console.log("login error", error);
      }
    }
  };
  const [borderInputEmail, setBorderInputEmail] = useState(
    "border-[rgba(0,0,0,.14);]"
  );
  const [borderInputPassword, setBorderInputPassword] = useState(
    "border-[rgba(0,0,0,.14);]"
  );
  const [signInData, setSignInData] = useState<SignInUserType>({
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
          <ValidateForm type="failure" message={validate.email} />
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
                type="button"
                className="bg-transparent border-none outline-none pl-[.75rem] pr-[.9375rem] flex items-center "
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <FaRegEye />
              </button>
            ) : (
              <button
                type="button"
                className="bg-transparent border-none outline-none pl-[.75rem] pr-[.9375rem] flex items-center "
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <RiEyeCloseLine />
              </button>
            )}
          </div>
          <ValidateForm type="failure" message={validate.password} />
        </div>
        <Button
          type="submit"
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
