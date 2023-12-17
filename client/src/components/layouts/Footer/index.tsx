import { FC } from "react";
import { Container } from "..";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const Footer: FC = () => {
  return (
    <footer className="bg-[#fbfbfb]">
      <Container>
        <TopFooter />
        <hr className="pb-[40px]" />
      </Container>
      <div className=" w-screen bg-[#f5f5f5]  pt-[2.625rem] pb-[2.3125rem] overflow-hidden ">
        <BottomFooter />
      </div>
    </footer>
  );
};

export default Footer;
