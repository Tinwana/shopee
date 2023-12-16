import { Button, Input } from "@/components/ui";
import React, { FC } from "react";
import { GoSearch } from "react-icons/go";

interface SearchFormProps {
  setSearchValue: (val: string) => void;
  searchValue: string;
}

const SearchForm: FC<SearchFormProps> = ({ searchValue, setSearchValue }) => {
  return (
    <form className="relative flex items-center w-[240px] md:w-[400px] lg:w-[800px] ">
      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        type="text"
        className="rounded-none  w-full "
        placeholder="Shopee bao ship 0Đ - Đăng ký ngay!
              "
      />
      <Button className="absolute h-[88%] right-[2px] bg-[linear-gradient(-180deg,#f53d2d,#f63);] w-[60px] p-[8px] rounded text-white">
        <GoSearch className="" size={20} />
      </Button>
    </form>
  );
};

export default SearchForm;
