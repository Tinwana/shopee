"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const SignInPage: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle login logic here
    console.log("Login data:", data);
  };
  return (
    <div
      className="h-[600px] mx-auto min-h-[600px] w-[1040px] justify-end items-center flex "
      style={{
        backgroundImage:
          'url("https://down-vn.img.susercontent.com/file/sg-11134004-7rbm1-lphq0ly9tv1f25")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="w-full justify-between flex  ">
        <div className="flex items-center"></div>
        <div className="">
          <div className="w-[400px] min-h-[482px] bg-[#fff] rounded-[4px] shadow-md overflow-hidden ">
            <div className="min-h-[80px] flex justify-between items-center ">
              <div className="px-[30px] py-[1.375rem] w-full flex justify-between items-center ">
                <div className="text-[#222] text-[1.25rem] max-w-[8.5rem] shrink-0  ">
                  Đăng nhập
                </div>
                <div className="ml-[1.25rem] flex items-center justify-end  ">
                  <div className="bg-[#fefaec] border-[2px] border-solid border-[#ffbf00] rounded-[2px] text-[#ffbf00] text-[.875rem] font-[700] mr-[1rem] px-[.875rem] py-[.6875rem] relative ">
                    Đăng nhập với mã QR
                  </div>
                  <a
                    href="https://shopee.vn/buyer/login/qr?next=https%3A%2F%2Fshopee.vn%2F"
                    className="w-[2.5rem] h-[2.5rem]  "
                  >
                    <svg width={40} height={40} fill="none" className="Gcv8A_">
                      <g clipPath="url(#clip0)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                          fill="#EE4D2D"
                        />
                        <path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D" />
                        <path
                          d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                          fill="#EE4D2D"
                        />
                        <path
                          fill="#fff"
                          d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <path fill="#fff" d="M0 0h40v40H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden px-[30px] pb-[30px] ">
              <form className="" onSubmit={handleSubmit(onSubmit)}></form>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
