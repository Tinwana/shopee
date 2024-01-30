"use client";

import { createContext, useEffect, useState } from "react";
type UserDataType = {
  name: string;
  userId: string;
  accountId: string;
  email: string;
  phoneNumber: string[];
  accessToken: string;
  role: string;
  avatar: string;
  verifyEmail: boolean;
};
type AuthContextType = {
  user: UserDataType;
  handleUpdate: (payload: UserDataType) => void;
  handleReset: () => void;
};
interface Props {
  [propsName: string]: any;
}
export const AuthContext = createContext<AuthContextType | null>(null);
const AuthContextWrapper = (props: Props) => {
  const [user, setUser] = useState<UserDataType>({
    name: "",
    userId: "",
    accountId: "",
    email: "",
    phoneNumber: [],
    accessToken: "",
    role: "",
    avatar: "",
    verifyEmail: false,
  });
  const handleUpdate = (payload: UserDataType) => {
    setUser({
      ...user,
      ...payload,
    });
  };
  const handleReset = () => {
    setUser({
      name: "",
      userId: "",
      accountId: "",
      email: "",
      phoneNumber: [],
      accessToken: "",
      role: "",
      avatar: "",
      verifyEmail: false,
    });
    localStorage.removeItem("user");
  };
  const value = {
    user,
    handleUpdate,
    handleReset,
  };
  useEffect(() => {
    const userStorage: any = localStorage.getItem("user");
    if (userStorage !== null) {
      const userParse = JSON.parse(userStorage);
      setUser(userParse);
    }
  }, []);
  if (user?.accessToken && user?.accessToken !== "")
    localStorage.setItem("user", JSON.stringify(user));
  return <AuthContext.Provider value={value} {...props} />;
};
export default AuthContextWrapper;
