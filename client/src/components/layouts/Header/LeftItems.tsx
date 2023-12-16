"use client";
import { FC } from "react";
import { HeaderSubItems } from "./headerSubItems";
import SubItems from "./SubItems";

const LeftItems: FC = ({}) => {
  return (
    <>
      {HeaderSubItems.map((item) => {
        return <SubItems key={item.title} item={item} />;
      })}
    </>
  );
};

export default LeftItems;
