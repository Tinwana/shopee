import { FC } from "react";
import { categoriesItems } from "./categoriesItemms";

const Categories: FC = ({}) => {
  return (
    <section className="">
      <h2 className="flex items-center h-[3.75rem] border-b-[1px] border-[rgba(0,0,0,.05)] border-solid px-[1.25rem] text-[1rem] text-[rgba(0,0,0,.54)] font-[500] ">
        DANH MỤC
      </h2>
      <ul className=" grid grid-cols-10 grid-rows-2 w-full">
        {categoriesItems.map((item) => (
          <li
            className="h-[151px] w-auto hover:scale-105 hover:shadow-2xl hover:z-10 transition-all"
            key={item.image}
          >
            <a
              href={item.href}
              className="w-full h-full no-underline text-[rgba(0,0,0,.87);] border-[rgba(0,0,0,.05);] border-r-[1px] border-b-[1px] border-solid text-center bg-[#fff] block relative duration-100 transition-[cubic-bezier(.4,0,.6,1)] cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center p-1">
                <div className="flex-shrink w-[100%] h-[50%] mt-[10%] ">
                  <div className="h-[100%] relative ">
                    <div
                      className="h-full opacity-100 transition-[ease] duration-200"
                      style={{
                        backgroundImage: `url("${item.image}")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <div className="w-[100%] h-[3.125rem] text-center  ">
                    <p className="w-full text-[rgba(0,0,0,.8);] text-[.875rem] leading-[1.25rem] h-[2.5rem] mb-[.625rem] break-normal overflow-hidden ">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
