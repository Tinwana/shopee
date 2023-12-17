import { GoBell, GoQuestion } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
export const HeaderSubItems = [
  {
    id: 1,
    title: "Thông báo",
    icon: GoBell,
  },
  {
    id: 2,
    title: "Hỗ trợ",
    icon: GoQuestion,
  },
  {
    id: 3,
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
