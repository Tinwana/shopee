import { mutationData } from "@/lib/fetchData";

const postRefreshToken = async () => {
  try {
    const res = await mutationData({
      url: "user/refresh-token",
      method: "POST",
      credentials: "include",
    });
    return res;
  } catch (error) {
    console.log("refresh token error", error);
  }
};
export default postRefreshToken;
