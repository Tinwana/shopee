import { SignInUserType } from "@/features/Auth/SignIn/components/SignInForm";
import { mutationData } from "@/lib/fetchData";

const postLoginCredentials = async (data: SignInUserType) => {
  try {
    const res = await mutationData({
      url: "user/login",
      method: "POST",
      body: data,
    });
    return res;
  } catch (error) {
    console.log("login service error: " + error);
  }
};
export default postLoginCredentials;
