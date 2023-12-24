import { Image } from "@/components/ui";
import Link from "next/link";
import { FC } from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const TopFooter: FC = () => {
  const paymentProviderImage = [
    "https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8",
    "https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16",
    "https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08",
    "https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c",
    "https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281",
    "https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09",
    "https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06",
    "https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492",
  ];
  const shipProviderImage = [
    "https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185",
    "https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2",
    "https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15",
    "https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f",
    "https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c",
    "https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63",
    "https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5",
    "https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d",
    "https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63",
    "https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6",
    "https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd",
  ];
  const followUsItems = [
    { icon: FaFacebook, title: "Facebook" },
    { icon: FaInstagramSquare, title: "Instagram" },
    { icon: FaLinkedin, title: "Linkedin" },
  ];
  return (
    <div className="w-[75rem] mx-auto grid grid-cols-5 ">
      <div className="justify-self-start">
        <h4 className="uppercase font-bold font-pcsmall text-[.75rem] text-[rgba(0,0,0,.87)] mb-[1.25rem] mt-[2.5rem]">
          chăm sóc khách hàng
        </h4>
        <ul className="no-underline text-[rgba(0,0,0,.65)] list-none p-0 mb-[1rem]">
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Trung Tâm Trợ Giúp</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Shopee Blog</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Shopee Mall</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Hướng Dẫn Mua Hàng</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Hướng Dẫn Bán Hàng</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Thanh Toán</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Shopee Xu</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Vận Chuyển</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Trả Hàng & Hoàn Tiền</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Chăm Sóc Khách Hàng</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Chính Sách Bảo Hành</Link>
          </li>
        </ul>
      </div>

      <div className="justify-self-start">
        <h4 className="uppercase font-bold font-pcsmall text-[.75rem] text-[rgba(0,0,0,.87)] mb-[1.25rem] mt-[2.5rem]">
          VỀ SHOPEE
        </h4>
        <ul className="no-underline text-[rgba(0,0,0,.65)] list-none p-0 mb-[1rem]">
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Giới Thiệu Về Shopee Việt Nam</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Tuyển Dụng</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Điều Khoản Shopee</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Chính Sách Bảo Mật</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Chính Hãng</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Kênh Người Bán</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Flash Sales</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Chương Trình Tiếp Thị Liên Kết Shopee</Link>
          </li>
          <li className="text-[.75rem] mb-[.75rem] cursor-pointer font-pcsmall hover:text-rose-500 ">
            <Link href="#">Liên Hệ Với Truyền Thông</Link>
          </li>
        </ul>
      </div>

      <div className="justify-self-start flex flex-col">
        <div>
          <h4 className="uppercase font-bold font-pcsmall text-[.75rem] text-[rgba(0,0,0,.87)] mb-[1.25rem] mt-[2.5rem]">
            THANH TOÁN
          </h4>
          <ul className="flex flex-wrap no-underline list-none p-0 mb-[1rem]">
            {paymentProviderImage.map((src: string) => (
              <li
                key={src}
                className="flex justify-center items-center mb-[.5rem] mr-[.5rem] p-[.25rem] bg-[#fff] shadow-sm rounded-[.125rem] w-[3.75rem] h-[1.875rem]  "
              >
                <Image
                  src={src}
                  alt="payment-image"
                  className="w-full h-full cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="uppercase font-bold font-pcsmall text-[.75rem] text-[rgba(0,0,0,.87)] mb-[1.25rem] mt-[0px]">
            ĐƠN VỊ VẬN CHUYỂN
          </h4>
          <ul className="flex flex-wrap no-underline list-none p-0 mb-[1rem]">
            {shipProviderImage.map((src: string) => (
              <li
                key={src}
                className="flex justify-center items-center mb-[.5rem] mr-[.5rem] p-[.25rem] bg-[#fff] shadow-sm rounded-[.125rem] w-[3.75rem] h-[1.875rem]  "
              >
                <Image
                  src={src}
                  alt="payment-image"
                  className="w-full h-full cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="justify-self-start">
        <h4 className="uppercase font-bold font-pcsmall text-[.75rem] text-[rgba(0,0,0,.87)] mb-[1.25rem] mt-[2.5rem]">
          THEO DÕI CHÚNG TÔI TRÊN
        </h4>
        <ul className="no-underline text-[rgba(0,0,0,.65)] list-none p-0 mb-[1rem]">
          {followUsItems.map((item) => (
            <li
              key={item.title}
              className="flex gap-2 mb-[.75rem] cursor-pointer "
            >
              <item.icon />
              <a
                href="#"
                className="text-[.75rem] font-pcsmall hover:text-rose-500"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="justify-self-end">
        <h4 className="uppercase font-bold font-pcsmall text-[.75rem] text-[rgba(0,0,0,.87)] mb-[1.25rem] mt-[2.5rem]">
          TẢI ỨNG DỤNG SHOPEE NGAY THÔI
        </h4>
        <div className="flex w-full mb-[1rem]">
          <a href="#" className="cursor-pointer">
            <Image
              src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
              alt="QR"
              className="h-[5rem] w-[5rem] mr-[.75rem] p-[.25rem] bg-[#fff] shadow-md rounded-[2px] "
            />
          </a>
          <div className="flex flex-col justify-between w-[4.75rem] ">
            <a
              href="#"
              className="inline-block cursor-pointer w-[4.25rem] h-[1rem] p-[.25rem] bg-[#fff] shadow-md rounded-[2px] "
            >
              <Image
                src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                alt="QR"
                className="w-full h-full"
              />
            </a>
            <a
              href="#"
              className="inline-block cursor-pointer w-[4.25rem] h-[1rem] p-[.25rem] bg-[#fff] shadow-md rounded-[2px] "
            >
              <Image
                src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                alt="QR"
                className="w-full h-full"
              />
            </a>
            <a
              href="#"
              className="inline-block cursor-pointer w-[4.25rem] h-[1rem] p-[.25rem] bg-[#fff] shadow-md rounded-[2px] "
            >
              <Image
                src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                alt="QR"
                className="w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
