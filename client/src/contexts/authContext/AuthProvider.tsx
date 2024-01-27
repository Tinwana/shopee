"use client";

import { FC, ReactNode } from "react";
import AuthContextWrapper from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return <AuthContextWrapper>{children}</AuthContextWrapper>;
};
export default AuthProvider;
