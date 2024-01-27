import React from "react";
import Video from "./Video";
import { Input } from "@/components/ui";

const HentaiPage = () => {
  const srcConnect = [
    {
      name: "Perception Kei of the Brother 2",
      src: "https://rs1-hide-cdn.online/play/api/703ca06f-5288-4236-bb12-5466b6bb99ab?tiktok=true",
    },
    {
      name: "Genshin Impact (ViciNeko)",
      src: "https://rs1-hide-cdn.online/play/api/bdf61f5f-1044-4207-ad06-32267a94e8b7?tiktok=true",
    },
    {
      name: "Rina to Ana 1",
      src: "https://rs1-hide-cdn.online/play/api/b0c5872e-393f-4b64-aa6b-12374df0cfff?tiktok=true",
    },
  ];
  return (
    <>
      {srcConnect.map((src, i) => (
        <Video key={i} src={src.src} name={src.name} />
      ))}
    </>
  );
};

export default HentaiPage;
