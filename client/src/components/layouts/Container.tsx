import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1200px] mx-auto px-2 lg:px-4 ">{children}</div>;
};

export default Container;
