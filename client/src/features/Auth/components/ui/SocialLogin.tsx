import { Button } from "@/components/ui";
import { FC } from "react";

interface SocialLoginProps {}

const SocialLogin: FC<SocialLoginProps> = ({}) => {
  return (
    <div className="uppercase my-[24px]">
      <div className="pb-[14px] flex items-center  ">
        <div className="h-[1px] w-full bg-[#dbdbdb] flex-1 "></div>
        <span className="text-[#ccc] px-[16px] uppercase text-[.75rem] ">
          HOẶC
        </span>
        <div className="h-[1px] w-full bg-[#dbdbdb] flex-1 "></div>
      </div>
      <div className="mx-[-5px] flex justify-between flex-wrap ">
        <Button variant="outline" className="px-8 w-[145px]">
          <p className="flex justify-center gap-2">
            <span
              style={{
                backgroundSize: "325% 287.5%",
                backgroundPosition: "5.555555555555555% 62.666666666666664%",
                backgroundImage:
                  "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/7b95007f3377150730bbb5d1ddb477d6.png')",
                width: "22px",
                height: "22px",
              }}
            ></span>
            <span>Facebook</span>
          </p>
        </Button>
        <Button variant="outline" className="px-8 w-[145px]">
          <p className="flex justify-center gap-2">
            <span
              style={{
                backgroundSize: "722.2222222222222% 638.8888888888889%",
                backgroundPosition: "83.92857142857143% 5.154639175257732%",
                backgroundImage:
                  "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/7b95007f3377150730bbb5d1ddb477d6.png')",
                width: "22px",
                height: "22px",
              }}
            ></span>
            <span>Google</span>
          </p>
        </Button>
      </div>
    </div>
  );
};
export default SocialLogin;
