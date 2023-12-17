"use client";
import { FC, useState } from "react";
import RightItems from "./RightItems";
import LeftItems from "./LeftItems";
import { Container } from "..";
import {
  Logo,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import SearchForm from "./SearchForm";
import { IoCartOutline } from "react-icons/io5";

import styles from "./header.module.css";

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[linear-gradient(-180deg,#f53d2d,#f63);] transition-[transform .2s cubic-bezier(.4,0,.2,1);] w-full h-[]">
      <Container>
        <div className="flex justify-between">
          <div className="flex font-light text-white divide-x-[1px]">
            <RightItems />
          </div>
          <div className="flex gap-4">
            <LeftItems />
            <div className="flex items-center text-white font-light text-[.8rem] divide-x-[1px]">
              <p className=" px-2 hover:opacity-70 cursor-pointer">Đăng ký</p>
              <p className=" pl-2 hover:opacity-70 cursor-pointer">Đăng nhập</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-[0.625rem] pt-[1rem]">
          <div className="">
            <Logo />
          </div>
          <SearchForm
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <div className="cursor-pointer">
                  <IoCartOutline size={32} className="text-white" />
                </div>
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
    </header>
  );
};

export default Header;
