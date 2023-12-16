import { FC } from "react";
import RightItems from "./RightItems";
import LeftItems from "./LeftItems";
import { Container } from "..";

const Header: FC = () => {
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
        <div className="">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
