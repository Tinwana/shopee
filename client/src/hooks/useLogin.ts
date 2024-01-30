"use client";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from ".";
import { useEffect } from "react";

const useLogin = () => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const unConnectRouteWhenLogin = ["/sign-in", "/register/verify-email", "/"];
  useEffect(() => {
    if (!unConnectRouteWhenLogin.includes(pathname)) {
      if (!user?.accessToken || user?.accessToken === "") {
        router.push("/sign-in");
      }
    } else {
      if (user?.accessToken || user?.accessToken !== "") {
        router.push("/");
      }
    }
  }, [user, pathname]);
};
export default useLogin;
