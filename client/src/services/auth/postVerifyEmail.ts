import fetchData from "@/lib/fetchData";

const postVerifyEmail = async (email: string) => {
  try {
    const res = await fetchData.mutationData({
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
