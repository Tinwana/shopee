import { postLogout } from "@/services";
import { useAuth } from ".";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

const useLogout = async () => {
  const { handleReset } = useAuth();
  await postLogout();
  handleReset();
  await signOut(auth);
};
export default useLogout;
