import { FC } from "react";
import { RegisterFeature } from "@/features/Auth/Register";

interface RegisterProps {
  params: {
    registerToken: string;
  };
}

const RegisterPage: FC<RegisterProps> = ({ params }) => {
  return <RegisterFeature />;
};

export default RegisterPage;
