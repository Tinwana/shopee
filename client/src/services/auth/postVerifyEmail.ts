import { mutationData } from "@/lib/fetchData";

const postVerifyEmail = async (email: string) => {
  try {
    const res = await mutationData({
      url: "user/verify-email",
      method: "POST",
      body: { email },
    });
    return res;
  } catch (error) {
    console.log("verify email error:", error);
  }
};
export default postVerifyEmail;
