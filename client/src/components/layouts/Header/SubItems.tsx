import { FC } from "react";
import { HeaderSubItems } from "./headerSubItems";
import { FaAngleDown } from "react-icons/fa";

interface SubItemsProps {
  item: (typeof HeaderSubItems)[0];
}

const SubItems: FC<SubItemsProps> = ({ item }) => {
  return (
    <p className="flex gap-1 items-center text-white font-light text-[.8rem] hover:opacity-70 cursor-pointer">
      <span className="text-[.9rem]">
        <item.icon size={18} />
      </span>
      {!item.langues ? (
        <span className="">{item.title}</span>
      ) : (
        <span className="flex items-center">
          {item.langues[0].langue} <FaAngleDown />
        </span>
      )}
    </p>
  );
};

export default SubItems;
