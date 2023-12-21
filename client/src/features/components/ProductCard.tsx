import { FC } from "react";
import { Image } from "@/components/ui";
import Link from "next/link";
import truncateText from "@/utils/truncate";
import formatPrice from "@/utils/formatPrice";
import formatNumber from "@/utils/formatNumber";
import { productTodayItems } from "../Home/ProductToday/productTodayItems";

interface ProductCardProps {
  item: (typeof productTodayItems)[0];
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <Link
      href="#"
      className="px-2 bg-[#fff] cursor-pointer flex flex-col justify-between transition-all hover:border-[1px] hover:border-[#ee4d2d] hover:-translate-y-1  "
    >
      <div className="relative">
        <div
          className="absolute w-[54px] h-[16px] top-[0] left-0"
          style={{
            backgroundImage:
              'url("https://down-vn.img.susercontent.com/file/847a7c7b8f9a78882268a0d824c86d1a")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
        <div className="text-center py-[.0rem] px-[.3rem]  bg-[rgba(255,233,122,1);] rounded-b-[.125rem] rounded-l-[.125rem] absolute top-0 right-0 ">
          <span className="text-[rgba(236,56,20,1);] leading-[.875rem] font-[500] text-[.75rem]  ">
            {item.discount}%
          </span>
        </div>
        <div className="w-full h-full">
          <Image
            src={item.image}
            alt="product image"
            className="w-full h-auto "
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="">{truncateText(item.name)}</div>
        <div className="flex justify-between">
          <div className="text-[rgba(236,56,20,1);]">
            {formatPrice(item.price, { currency: "VND" })}
          </div>
          <div className="text-[rgba(0,0,0,.54118);] text-[.75rem] leading-[1rem] ml-[.125rem] h-[.875rem] ">
            Đã bán {formatNumber(item.sold)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
