"use client";
import { FC, useState } from "react";
import RightItems from "./RightItems";
import LeftItems from "./LeftItems";
import {
  Image,
  Logo,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import SearchForm from "./SearchForm";
import { IoCartOutline } from "react-icons/io5";
import Container from "../Container";

import styles from "./header.module.css";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { FaRegUser } from "react-icons/fa";
import { postLogout } from "@/services";

interface HeaderProps {
  cart?: boolean;
}

const Header: FC<HeaderProps> = ({ cart }) => {
  const { user, handleReset } = useAuth();
  console.log(user);
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[linear-gradient(-180deg,#f53d2d,#f63);] transition-[transform .2s cubic-bezier(.4,0,.2,1);] w-full min-h-[120px]">
      <Container>
        <div className="flex justify-between">
          <div className="flex font-light text-white divide-x-[1px]">
            <RightItems />
          </div>
          <div className="flex gap-4">
            <LeftItems />
            <div
              className={`flex items-center text-white font-light text-[.8rem] ${
                user?.accessToken !== "" && user?.accessToken
                  ? ""
                  : " divide-x-[1px]"
              }`}
            >
              {user?.accessToken !== "" && user?.accessToken ? (
                <>
                  {user?.avatar !== "" && user?.avatar ? (
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-2">
                            <Image
                              alt="avatar"
                              src={user?.avatar}
                              className="rounded-full w-[20px] h-[20px]"
                            />
                            <span className="text-[1rem]">{user?.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          align="center"
                          side="bottom"
                          className="flex flex-col items-center shadow-md rounded-[.2rem] bg-[#fff] w-[10rem]"
                        >
                          <li className="text-[1rem] no-underline list-none py-2 px-4 cursor-pointer w-[10rem] hover:bg-stone-100 hover:text-teal-500">
                            <a href="#">Tài khoản của tôi</a>
                          </li>
                          <li className="text-[1rem] no-underline list-none py-2 px-4 cursor-pointer w-[10rem] hover:bg-stone-100 hover:text-teal-500">
                            <a href="#">Đơn mua</a>
                          </li>
                          <li
                            onClick={async () => {
                              handleReset();
                              await postLogout();
                            }}
                            className="text-[1rem] no-underline list-none py-2 px-4 cursor-pointer w-[10rem] hover:bg-stone-100 hover:text-teal-500"
                          >
                            Đăng xuất
                          </li>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <>
                      <TooltipProvider>
                        <Tooltip delayDuration={0}>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-2">
                              <span>
                                <FaRegUser size={16} />
                              </span>
                              <span className="text-[1rem]">{user?.name}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            align="center"
                            side="bottom"
                            className="flex flex-col items-center shadow-md rounded-[.2rem] bg-[#fff] w-[10rem]"
                          >
                            <li className="text-[1rem] no-underline list-none py-2 px-4 cursor-pointer w-[10rem] hover:bg-stone-100 hover:text-teal-500">
                              <a href="#">Tài khoản của tôi</a>
                            </li>
                            <li className="text-[1rem] no-underline list-none py-2 px-4 cursor-pointer w-[10rem] hover:bg-stone-100 hover:text-teal-500">
                              <a href="#">Đơn mua</a>
                            </li>
                            <li
                              onClick={async () => {
                                handleReset();
                                await postLogout();
                              }}
                              className="text-[1rem] no-underline list-none py-2 px-4 cursor-pointer w-[10rem] hover:bg-stone-100 hover:text-teal-500"
                            >
                              Đăng xuất
                            </li>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link
                    href="/register/verify-email"
                    className=" px-2 hover:opacity-70 cursor-pointer"
                  >
                    Đăng ký
                  </Link>
                  <Link
                    href="sign-in"
                    className=" pl-2 hover:opacity-70 cursor-pointer"
                  >
                    Đăng nhập
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
      <>
        {cart ? (
          <div className="bg-[#fff] py-3 border-[1px] border-slate-200 shadow-sm">
            <Container>
              <div className="flex justify-between items-center pb-[0.625rem] pt-[1rem]">
                <Link
                  href="/"
                  className="flex divide-x-[1px] items-center divide-rose-500"
                >
                  <Logo fillClass="red" className="px-3 mb-4 " />
                  <span className="text-rose-500 px-3 text-[1.2rem] font-light">
                    Giỏ Hàng
                  </span>
                </Link>
                <SearchForm
                  cart
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </div>
            </Container>
          </div>
        ) : (
          <Container>
            <div className="flex justify-between items-center pb-[0.625rem] pt-[1rem]">
              <Link href="/" className="">
                <Logo fillClass="white" />
              </Link>
              <SearchForm
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link href="/cart" className="cursor-pointer">
                      <IoCartOutline size={32} className="text-white" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    align="end"
                    side="bottom"
                    className="shadow-md rounded-[.125rem] bg-[#fff] w-[25rem] "
                  >
                    <div className="text-center py-[3.75rem]">
                      <div className={styles.backgroundCartEmpty}></div>
                      <h3 className="m-0 font-[400] text-[.9rem] capitalize text-[#000]">
                        Chưa có sản phẩm
                      </h3>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Container>
        )}
      </>
    </header>
  );
};

export default Header;
