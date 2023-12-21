import { FC } from "react";
import { productTodayItems } from "./productTodayItems";
import { ProductCard } from "@/features/components";

const ProductToday: FC = () => {
  return (
    <article className="mt-[1.25rem] rounded-sm shadow-sm ">
      <div className="bg-[#fff] mb-3 w-full uppercase text-[#ee4d2d] text-center p-4 border-b-[4px] border-[#ee4d2d]  ">
        gợi ý hôm nay
      </div>
      <div className="grid grid-cols-6 grid-flow-row gap-3">
        {productTodayItems.map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
      </div>
    </article>
  );
};

export default ProductToday;
