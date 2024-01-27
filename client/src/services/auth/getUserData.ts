import fetchData from "@/lib/fetchData";

const getUserData = async (id: string) => {
  try {
    const res = await fetchData.queryData({ url: `user/${id}` });
    return res;
  } catch (error) {
    console.log("get user error: " + error);
  }
};
export default getUserData;
