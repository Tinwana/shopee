import Link from "next/link";
import React, { FC } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const RightItems: FC = () => {
  return (
    <>
      <Link
        href="#"
        className="text-white pr-3 my-2 text-[.75rem] capitalize hover:opacity-70 cursor-pointer "
      >
        kênh người bán
      </Link>
      <Link
        href="#"
        className="text-white px-3 my-2 text-[.75rem] capitalize hover:opacity-70 cursor-pointer "
      >
        trở thành người bán shopee
      </Link>
      <Link
        href="#"
        className="text-white px-3 my-2 text-[.75rem] capitalize hover:opacity-70 cursor-pointer "
      >
        tải ứng dụng
      </Link>
      <p className="text-white px-3 my-2 text-[.75rem] capitalize flex gap-2 items-center ">
        kết nối{" "}
        <Link
          href={"https://www.facebook.com/profile.php?id=100044059298413"}
          target="_blank"
          className="text-white hover:opacity-70 cursor-pointer"
        >
          <FaFacebook size={16} />
        </Link>{" "}
        <span className="text-white hover:opacity-70 cursor-pointer">
          <FaSquareInstagram size={16} />
        </span>
      </p>
    </>
  );
};

export default RightItems;
