import { Container } from "@/components/layouts";
import { Logo } from "@/components/ui";
import Link from "next/link";
import { FC } from "react";

const AuthHeader: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff] transition-[transform .2s cubic-bezier(.4,0,.2,1);] w-full min-h-[120px]">
      <Container>
        <div className="flex justify-between items-center min-h-[120px]">
          <div className="flex items-center">
            <Link href="/">
              <Logo fillClass="red" className="px-3 -mt-4" />
            </Link>
            <span className="text-[#000] text-[1.6rem]  ">Đăng nhập</span>
          </div>
          <div className="text-[#ee4d2d] cursor-pointer">Bạn cần giúp đỡ?</div>
        </div>
      </Container>
    </header>
  );
};

export default AuthHeader;
