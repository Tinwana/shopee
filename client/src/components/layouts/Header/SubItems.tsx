import { FC, useCallback, useState } from "react";
import { HeaderSubItems } from "./headerSubItems";
import { FaAngleDown } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import LangueToggle from "./LangueToggle";
import { cn } from "@/utils/cn";

interface SubItemsProps {
  item: (typeof HeaderSubItems)[0];
}

const SubItems: FC<SubItemsProps> = ({ item }) => {
  const [changeLanguage, setChangeLanguage] = useState<{
    langue: string;
    code: string;
  } | null>({
    langue: "Tiếng Việt",
    code: "vi",
  });

  const handleChangeLangue = useCallback(
    (
      item: {
        langue: string;
        code: string;
      } | null
    ) => {
      setChangeLanguage(item);
    },
    [changeLanguage]
  );

  return (
    <p className="relative flex gap-1 items-center text-white font-light text-[.8rem] cursor-pointer">
      <span className="text-[.9rem]">
        <item.icon size={18} />
      </span>
      {!item.langues ? (
        <span className="">{item.title}</span>
      ) : (
        <TooltipProvider delayDuration={50}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="flex items-center">
                {changeLanguage?.langue} <FaAngleDown />
              </span>
            </TooltipTrigger>
            <TooltipContent
              className={cn("bg-white opacity-100 absolute -right-8 top-8")}
            >
              <LangueToggle
                handleChangeLangue={handleChangeLangue}
                item={item}
              />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </p>
  );
};

export default SubItems;
