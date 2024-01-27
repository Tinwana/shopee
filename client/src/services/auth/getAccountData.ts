import fetchData from "@/lib/fetchData";

const getAccountData = async (id: string) => {
  try {
    const res = await fetchData.queryData({ url: `user/account/${id}` });
    return res;
  } catch (error) {
    console.log("get account error: " + error);
  }
};
export default getAccountData;
