import { refreshTokenFetcher } from "@/lib/fetchData";

const getUserData = async (id: string) => {
  try {
    const res = await refreshTokenFetcher({ url: `user/${id}`, method: "GET" });
    return res;
  } catch (error) {
    console.log("get user error: " + error);
  }
};
export default getUserData;
