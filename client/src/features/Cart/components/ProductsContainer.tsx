"use client";
import { Input } from "@/components/ui";
import { ChatIcon, LikedIcon } from "@/components/ui/Icons";
import { useCart } from "@/hooks";
import { FC } from "react";
import CartProductCard from "./CartProductCard";

interface ProductsContainerProps {
  item: any;
}

const ProductsContainer: FC<ProductsContainerProps> = ({ item }) => {
  const {} = useCart();
  return (
    <div className="flex flex-col divide-y-[1px] bg-[#fff]">
      <div className="flex items-center gap-2  px-8 py-2">
        <Input
          id="product"
          type="checkbox"
          className="shrink-0 w-[20px] pl-[20px] pr-[12px] accent-rose-500 font-[300] text-[12px] max-w[400px] outline-none"
        />
        <div className="cursor-pointer">
          <LikedIcon />
        </div>
        <div className="">Thái Dương</div>
      </div>
      <div className=" divide-y-[1px] px-2">
        {Array.from({ length: 5 }).map((item, i) => {
          return <CartProductCard key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
