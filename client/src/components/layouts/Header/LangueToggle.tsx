import { FC } from "react";
import { HeaderSubItems } from "./headerSubItems";

interface LangueToggleProps {
  handleChangeLangue: (
    item: {
      langue: string;
      code: string;
    } | null
  ) => void;
  item: (typeof HeaderSubItems)[0];
}

const LangueToggle: FC<LangueToggleProps> = ({ handleChangeLangue, item }) => {
  return (
    <div className="bg-[#fff] rounded-md p-px min-w-[160px] flex flex-col gap-4">
      <p
        onClick={() =>
          handleChangeLangue(
            item?.langues !== undefined ? item.langues[1] : null
          )
        }
        className="text-slate-700 font-semibold text-[.85rem] font-pcsmall hover:opacity-100 hover:text-rose-500"
      >
        Tiếng Việt
      </p>
      <p
        onClick={() =>
          handleChangeLangue(
            item?.langues !== undefined ? item.langues[0] : null
          )
        }
        className="text-slate-700 font-semibold text-[.85rem] font-pcsmall hover:text-rose-500"
      >
        English
      </p>
    </div>
  );
};

export default LangueToggle;
