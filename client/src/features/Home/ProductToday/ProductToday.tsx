import { FC } from "react";
import { productTodayItems } from "./productTodayItems";

const ProductToday: FC = () => {
  return (
    <article className="mt-[1.25rem] rounded-sm shadow-sm ">
      <div className="bg-[#fff] mb-3 w-full uppercase text-[#ee4d2d] text-center p-4 border-b-[4px] border-[#ee4d2d]  ">
        gợi ý hôm nay
      </div>
      <div className="bg-[#fff] grid grid-cols-6 grid-flow-row py-2">
        {productTodayItems.map((item) => (
          <div className="px-2" key={item.image}>
            <div className="relative">
              <div className="">like background</div>
              <div className="">discount</div>
              <div className="">image</div>
            </div>
            <div className="">
              <div className="">name</div>
              <div className="">
                <div className="">price</div>
                <div className="">sold</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProductToday;
