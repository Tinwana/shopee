"use client";
import { Image, Input } from "@/components/ui";
import formatPrice from "@/utils/formatPrice";
import { FC, useState } from "react";
import SetQuantity from "./SetQuantity";

interface CartProductCardProps {
  item: any;
}

const CartProductCard: FC<CartProductCardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="grid grid-cols-12 px-6 py-6 rounded place-items-center">
      <div className="col-span-4 justify-self-start">
        <div className="flex items-center justify-between gap-2 ">
          <Input
            id="product"
            type="checkbox"
            className="flex-grow-1 max-w-[20px] pl-[20px] pr-[12px] accent-rose-500 font-[300] text-[12px] max-w[400px] outline-none"
          />
          <div className="flex items-center">
            <Image
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lftnabjfbjai55"
              alt="product image"
              className="aspect-square w-20 h-20 "
            />
            <p className="text-[.9rem] shrink-1 ">
              Bơm nước Chìm mini bể cá 3V-5V Nhiều loại tùy chọn
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 justify-self-center text-[.9rem] text-[#222]">
        {formatPrice(5900, { currency: "VND" })}
      </div>
      <div className="col-span-2 justify-self-center text-[.9rem] text-[#888]">
        <SetQuantity quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="col-span-2 justify-self-center text-[.9rem] text-[#888]">
        <span className="text-rose-500">
          {formatPrice(5900, { currency: "VND" })}
        </span>
      </div>
      <div className="col-span-2 justify-self-center text-[.9rem] text-[#888] hover:text-rose-500 cursor-pointer">
        Xóa
      </div>
    </div>
  );
};

export default CartProductCard;
