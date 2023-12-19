"use client";
import { FC } from "react";
import HotSearchItem from "./HotSearchItem";

export const hotSearchItemProps = [
  {
    title: "Đất Trồng Cây",
    salePerMonth: "Bán 9k+/tháng",
    image:
      "https://down-vn.img.susercontent.com/file/72705a68dbd93bbb00696cad07a7e782",
  },
  {
    title: "Nấm Đối Kháng Trichoderma",
    salePerMonth: "Bán 3k+/tháng",
    image:
      "https://down-vn.img.susercontent.com/file/92eba6e08ac5faf8b676d168e0433c3f",
  },
  {
    title: "Đất Trồng Cây",
    salePerMonth: "Bán 7k+/tháng",
    image:
      "https://down-vn.img.susercontent.com/file/1a9df3c24a2ac91e5e624ff897d008b7",
  },
  {
    title: "Đất Trồng Cây",
    salePerMonth: "Bán 8k+/tháng",
    image:
      "https://down-vn.img.susercontent.com/file/b9e8e1d73b4f07890f8c560b24b99ad7",
  },
  {
    title: "Đất Trồng Cây",
    salePerMonth: "Bán 2k+/tháng",
    image:
      "https://down-vn.img.susercontent.com/file/bca10ab6ebfbf452c2bf459e6be49812",
  },
  {
    title: "Đất Trồng Cây",
    salePerMonth: "Bán 5k+/tháng",
    image:
      "https://down-vn.img.susercontent.com/file/ed2ee7e86e691356f258645a4cab5524",
  },
];

const HotSearchItems: FC = () => {
  return (
    <div className="grid grid-cols-6 gap-3 py-2">
      {hotSearchItemProps.map((item) => (
        <HotSearchItem key={item.image} item={item} />
      ))}
    </div>
  );
};

export default HotSearchItems;
