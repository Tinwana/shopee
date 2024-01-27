import fetchData from "@/lib/fetchData";

const postLogout = async () => {
  try {
    const res = await fetchData.mutationData({
      url: "user/logout",
      method: "POST",
    });
    return res;
  } catch (error) {
    console.log("logout error: " + error);
  }
};
export default postLogout;
