import { FC } from "react";
import { hotSearchItemProps } from "./HotSearchItems";
import { Image } from "@/components/ui";

interface HotSearchItemProps {
  item: (typeof hotSearchItemProps)[0];
}

const HotSearchItem: FC<HotSearchItemProps> = ({ item }) => {
  return (
    <div className=" px-2">
      <div className="relative mb-4">
        <div
          className="absolute w-8 h-8 top-0 left-0"
          style={{
            backgroundImage:
              'url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/06720e49514cbd94b7552496b4de454a.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.5rem 1.875rem",
          }}
        ></div>
        <Image
          src={item?.image}
          alt="hot search image"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full bottom-0 leading-[1.5625rem;] font-[500]  h-[1.5625rem;] bg-[rgba(0,0,0,.26);] text-[#fff] text-center text-[.9rem]">
          {item.salePerMonth}
        </div>
      </div>
      <div className="">{item.title}</div>
    </div>
  );
};

export default HotSearchItem;
