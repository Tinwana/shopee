import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";

function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: any) => {
    const router = useRouter();
    const { user } = useAuth();
    if (!user?.accessToken || user?.accessToken === "") {
      router.push("/sign-in");
      return null;
    }
    return <Component {...props} />;
  };
}

export default withAuth;
