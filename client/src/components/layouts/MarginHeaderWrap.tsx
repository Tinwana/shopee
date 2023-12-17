import { FC, ReactNode } from "react";

interface MarginHeaderWrapProps {
  children: ReactNode;
}

const MarginHeaderWrap: FC<MarginHeaderWrapProps> = ({ children }) => {
  return <div className="mt-[110px]">{children}</div>;
};

export default MarginHeaderWrap;
