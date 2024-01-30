import { UserCredential } from "firebase/auth";
import { mutationData } from "@/lib/fetchData";

const postLoginSocial = async (auth: UserCredential) => {
  try {
    const res = await mutationData({
      url: "user/login",
      method: "POST",
      body: {
        email: auth?.user?.email,
        name: auth?.user?.displayName,
        provider: auth?.providerId,
        // providerAccountId: auth?.user?.uid,
        verifyEmail: auth?.user?.emailVerified,
        phoneNumber: auth?.user?.phoneNumber,
        avatar: auth.user.photoURL,
      },
    });
    return res;
  } catch (error) {
    console.log("social login error: " + error);
  }
};
export default postLoginSocial;
