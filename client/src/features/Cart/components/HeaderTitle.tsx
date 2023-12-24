import { Image, Input } from "@/components/ui";
import { FC } from "react";

const HeaderTitle: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#fffefb] border-[1px] border-[rgba(224,168,0,.4);] px-[.75rem] py-[1rem] flex items-center mb-[.625rem] rounded-[2px] ">
        <Image
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
          alt="img"
          className="w-[24px] h-[20px] aspect-[24/20] "
        />
        <span className="text-[#222] ml-[.5rem]  ">
          Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn
          nhé!
        </span>
      </div>
      <div className="grid grid-cols-12 bg-[#fff] px-8 py-2 rounded place-items-center">
        <div className="col-span-4 justify-self-start">
          <div className="flex items-center gap-4 ">
            <Input
              id="product"
              type="checkbox"
              className="w-[20px] pl-[20px] pr-[12px] accent-rose-500 font-[300] text-[12px] max-w[400px] outline-none"
            />
            <label
              className="text-[rgba(0,0,0,.8);] text-[.9rem]"
              htmlFor="product"
            >
              Sản Phẩm
            </label>
          </div>
        </div>
        <div className="col-span-2 justify-self-center text-[.9rem] text-[#888]">
          Đơn Giá
        </div>
        <div className="col-span-2 justify-self-center text-[.9rem] text-[#888]">
          Số Lượng
        </div>
        <div className="col-span-2 justify-self-center text-[.9rem] text-[#888]">
          Số Tiền
        </div>
        <div className="col-span-2 justify-self-center text-[.9rem] text-[#888]">
          Thao Tác
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
