import { FC } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { Container, MarginHeaderWrap } from "@/components/layouts";
import {
  Categories,
  HomeBanner,
  HotSearchItems,
  ProductToday,
  ShopDescription,
} from "@/features/Home";

const HomePage: FC = () => {
  return (
    <MarginHeaderWrap>
      {/* banner */}
      <article className="pt-[30px] bg-[#fff] pb-5">
        <HomeBanner />
      </article>
      <Container>
        {/* categories */}
        <article className="min-h-[18.875rem] mt-[1.25rem] bg-[#fff] ">
          <Categories />
        </article>
        {/* hot search */}
        <article className="mt-[1.25rem] bg-[#fff] rounded-sm shadow-sm divide-y-[1px]">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-[#ee4d2d]">TÌM KIẾM HÀNG ĐẦU</h3>
            <p className="flex items-center text-[#ee4d2d]">
              <span className="cursor-pointer">Xem Tất Cả</span>{" "}
              <span className="">
                <HiChevronRight />
              </span>
            </p>
          </div>
          <HotSearchItems />
        </article>
        {/* home product */}
        <ProductToday />
        {/* shoppe description */}
      </Container>
      <ShopDescription />
    </MarginHeaderWrap>
  );
};

export default HomePage;
