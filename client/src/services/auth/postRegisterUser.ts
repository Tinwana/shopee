import { RegisterUserDataType } from "@/features/Auth/Register/components/RegisterForm";
import fetchData from "@/lib/fetchData";

const postRegisterUser = async (data: RegisterUserDataType, token: string) => {
  try {
    const res = await fetchData.mutationData({
      url: "user/register",
      method: "POST",
      body: data,
      params: {
        key: "activation_token",
        value: token,
      },
    });
    return res;
  } catch (error) {
    console.log("register user error:", error);
  }
};
export default postRegisterUser;
