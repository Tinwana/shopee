import { Container, MarginHeaderWrap } from "@/components/layouts";
import { Categories, HomeBanner } from "@/features/Home";
import { FC } from "react";

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
        <article className="mt-[1.25rem] bg-[#fff]"></article>
        {/* home product */}
        <div className=""></div>
        {/* shoppe description */}
      </Container>
    </MarginHeaderWrap>
  );
};

export default HomePage;
