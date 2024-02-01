"use client";
import { Button } from "@/components/ui";
import { auth, facebookProvider, googleProvider } from "@/config/firebase";
import { useAuth } from "@/hooks";
import { getAccountData, getUserData, postLoginSocial } from "@/services";
import { signInWithPopup } from "firebase/auth";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { FC } from "react";
import toast from "react-hot-toast";

interface SocialLoginProps {}

const SocialLogin: FC<SocialLoginProps> = ({}) => {
  const { handleUpdate } = useAuth();
  const router = useRouter();
  //handler
  const handleLoginFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log(result);
      // const res = await postLoginSocial(result);
      // if (res?.status === "success") {
      //   const authDecode: any = jwtDecode(res?.accessToken);
      //   const userData = await getUserData(authDecode?.payload?.userId);
      //   const accountData = await getAccountData(authDecode?.payload?.id);
      //   handleUpdate({
      //     name: accountData?.data.name,
      //     userId: userData?.data.id,
      //     accountId: accountData?.data.id,
      //     email: userData?.data.email,
      //     phoneNumber: userData?.data.phoneNumber,
      //     accessToken: accountData?.data?.accessToken || "",
      //     role: accountData?.data.role,
      //     avatar: accountData?.data?.avatar || "",
      //     verifyEmail: accountData?.data?.verifyEmail,
      //   });
      //   toast.success(res?.message);
      //   router.push("/");
      // }
    } catch (error) {
      console.log("facebook login error: " + error);
    }
  };
  const handleLoginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const res = await postLoginSocial(result);
      if (res?.status === "success") {
        const authDecode: any = jwtDecode(res?.accessToken);
        console.log("payload", authDecode?.payload.userId);
        const userData = await getUserData(authDecode?.payload?.userId);
        const accountData = await getAccountData(authDecode?.payload?.id);
        handleUpdate({
          name: accountData?.data?.userName,
          userId: userData?.data?.id,
          accountId: accountData?.data?.id,
          email: userData?.data?.email,
          phoneNumber: accountData?.data?.AccountPhoneNumber,
          accessToken: accountData?.data?.accessToken || "",
          role: accountData?.data?.role,
          avatar: accountData?.data?.avatar || "",
          verifyEmail: accountData?.data?.verify,
        });
        toast.success(res?.message);
        router.push("/");
      }
    } catch (error) {
      console.log("login google error", error);
    }
  };

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
        <Button
          variant="outline"
          className="px-8 w-[145px]"
          onClick={handleLoginFacebook}
        >
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
        <Button
          variant="outline"
          className="px-8 w-[145px]"
          onClick={handleLoginGoogle}
        >
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
