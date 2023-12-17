"use client";
import {
  Button,
  Image,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { ShopIcon } from "@/components/ui/Icons";
import React, { FC, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";

interface SearchFormProps {
  setSearchValue: (val: string) => void;
  searchValue: string;
}

const SearchForm: FC<SearchFormProps> = ({ searchValue, setSearchValue }) => {
  const searchInputRef = useRef<any>(null);
  const [popOpen, setPopOpen] = useState(false);
  console.log(popOpen);
  return (
    <form className="relative flex items-center w-[240px] md:w-[400px] lg:w-[800px] ">
      <Popover open={popOpen}>
        <PopoverTrigger asChild>
          <Input
            onClick={() => setPopOpen(true)}
            ref={searchInputRef}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            type="text"
            className="rounded-none  w-full "
            placeholder="Shopee bao ship 0Đ - Đăng ký ngay!
              "
          />
        </PopoverTrigger>
        <PopoverContent
          className="absolute w-[720px] -left-[400px] p-2 "
          onPointerDownOutside={() => {
            setPopOpen(false);
          }}
        >
          {searchValue === "" ? (
            <>
              <a
                href="#"
                className="flex items-center pr-[15px] text-[rgba(0,0,0,.87);] overflow-hidden text-ellipsis whitespace-nowrap leading-[1rem] hover:bg-[#fafafa]"
              >
                <span className="mr-[20px] cursor-pointer">
                  Shopee bao ship 0Đ - Đăng ký ngay!
                </span>
                <Image
                  className="ml-auto h-[24px] "
                  src="https://down-vn.img.susercontent.com/file/29218d6681841ae13f18a6be04f6a57b"
                  alt="search"
                />
              </a>
            </>
          ) : (
            <>
              <div className="">
                <a
                  href="#"
                  className="flex items-center text-[rgba(0,0,0,.87);] whitespace-nowrap p-[.625rem] leading-[1rem] hover:bg-[#fafafa]"
                >
                  <ShopIcon />
                  <span className="">Tìm Shop "{searchValue}"</span>
                </a>
                {Array.from({ length: 5 }).map((searchItem, i) => {
                  return (
                    <a
                      key={i}
                      href="#"
                      className="hover:bg-[#fafafa] flex items-center text-[rgba(0,0,0,.87);] whitespace-nowrap p-[.625rem] leading-[1rem]"
                    >
                      <span className="">{searchValue}</span>
                    </a>
                  );
                })}
              </div>
            </>
          )}
        </PopoverContent>
      </Popover>
      <Button className="absolute h-[88%] right-[2px] bg-[linear-gradient(-180deg,#f53d2d,#f63);] w-[60px] p-[8px] rounded text-white">
        <GoSearch className="" size={20} />
      </Button>
    </form>
  );
};

export default SearchForm;
