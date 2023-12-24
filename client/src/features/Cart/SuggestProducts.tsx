import { FC } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { productTodayItems } from "../Home/ProductToday/productTodayItems";
import { ProductCard } from "../components/ui";

const SuggestProducts: FC = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between mb-6">
        <h2 className="text-slate-500">CÓ THỂ BẠN CŨNG THÍCH</h2>
        <p className="flex items-center text-[#ee4d2d]">
          <span className="cursor-pointer">Xem Tất Cả</span>{" "}
          <span className="">
            <HiChevronRight />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-6 grid-flow-row gap-3">
        {productTodayItems.map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SuggestProducts;
