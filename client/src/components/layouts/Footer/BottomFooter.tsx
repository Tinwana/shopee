import { FC } from "react";
import styles from "./footer.module.css";
const BottomFooter: FC = () => {
  return (
    <div className="text-[.75rem] text-[rgba(0,0,0,.65)] w-[75rem] mx-auto flex flex-col items-center">
      <div className="flex justify-center mb-[2.5rem]">
        <div className="px-[1.5625rem] border-r-[1px] border-r-[rgba(0,0,0,.09)] border-solid text-[.75rem] font-pcsmall">
          <a href="#" className="text-[rgba(0,0,0,.54);]">
            CHÍNH SÁCH BẢO MẬT
          </a>
        </div>
        <div className="px-[1.5625rem] border-r-[1px] border-r-[rgba(0,0,0,.09)] border-solid text-[.75rem] font-pcsmall">
          <a href="#" className="text-[rgba(0,0,0,.54);]">
            QUY CHẾ HOẠT ĐỘNG
          </a>
        </div>
        <div className="px-[1.5625rem] border-r-[1px] border-r-[rgba(0,0,0,.09)] border-solid text-[.75rem] font-pcsmall">
          <a href="#" className="text-[rgba(0,0,0,.54);]">
            CHÍNH SÁCH VẬN CHUYỂN
          </a>
        </div>
        <div className="px-[1.5625rem] font-pcsmall">
          <a href="#" className="text-[rgba(0,0,0,.54);]">
            CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center mt-0">
        <a href="#" className="mx-[1.25rem]">
          <div className={styles?.backgroundSquare}></div>
        </a>
        <a href="#" className="mx-[1.25rem]">
          <div className={styles?.backgroundSquare}></div>
        </a>
        <a href="#" className="mx-[1.25rem]">
          <div className={styles?.backgroundCircle}></div>
        </a>
      </div>
      <div className="mb-[1.5625rem] mt-[.5rem] w-full text-center text-[.75rem] text-[rgba(0,0,0,.65);] font-pcsmall ">
        Công ty TNHH Shopee
      </div>
      <div className="text-[.75rem] text-[rgba(0,0,0,.65);] w-full text-center mt-[.5rem] font-pcsmall ">
        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
        Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ
        trợ: 19001221 - Email: cskh@hotro.shopee.vn
      </div>
      <div className="text-[.75rem] text-[rgba(0,0,0,.65);] w-full text-center mt-[.5rem] font-pcsmall ">
        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ:
        024 73081221 (ext 4678)
      </div>
      <div className="text-[.75rem] text-[rgba(0,0,0,.65);] w-full text-center mt-[.5rem] font-pcsmall ">
        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần
        đầu ngày 10/02/2015
      </div>
      <div className="text-[.75rem] text-[rgba(0,0,0,.65);] w-full text-center mt-[.5rem] font-pcsmall ">
        © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
      </div>
    </div>
  );
};

export default BottomFooter;
