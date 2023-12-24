import { Button, Input } from "@/components/ui";
import { FC } from "react";

const CartControl: FC = () => {
  return (
    <div className="bg-[#fff] flex items-center justify-between px-4 py-4 sticky bottom-0 border-t-[4px] border-[#ee4d2d]">
      <div className="flex items-center gap-8">
        <Input
          id="product"
          type="checkbox"
          className="shrink-0 max-w-[20px] pl-[20px] pr-[12px] accent-rose-500 font-[300] text-[12px] max-w[400px] outline-none"
        />
        <span className="whitespace-nowrap">Chọn Tất Cả (32)</span>
        <span className=" cursor-pointer">Xóa</span>
        <span className="text-rose-500 cursor-pointer whitespace-nowrap">
          Lưu vào mục Đã thích
        </span>
      </div>
      <div className="flex items-center gap-8">
        <p className="">
          <span className="">
            Tổng thanh toán (0 Sản phẩm):
            <span className="text-rose-500 text-[1.8rem]">₫0</span>
          </span>
        </p>
        <Button variant="destructive" className="rounded-none px-16">
          Mua hàng
        </Button>
      </div>
    </div>
  );
};

export default CartControl;
