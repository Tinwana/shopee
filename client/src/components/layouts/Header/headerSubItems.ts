import { GoBell, GoQuestion } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
export const HeaderSubItems = [
  {
    title: "Thông báo",
    icon: GoBell,
  },
  {
    title: "Hỗ trợ",
    icon: GoQuestion,
  },
  {
    langues: [
      {
        code: "en",
        langue: "English",
      },
      {
        code: "vi",
        langue: "Tiếng Việt",
      },
    ],
    icon: AiOutlineGlobal,
  },
];
