import { refreshTokenFetcher } from "@/lib/fetchData";

const getAccountData = async (id: string) => {
  try {
    const res = await refreshTokenFetcher({
      url: `user/account/${id}`,
      method: "GET",
    });
    return res;
  } catch (error) {
    console.log("get account error: " + error);
  }
};
export default getAccountData;
