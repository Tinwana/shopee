import { Dispatch, FC, SetStateAction } from "react";

interface SetQuantityProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const SetQuantity: FC<SetQuantityProps> = ({ quantity, setQuantity }) => {
  console.log(quantity);

  return (
    <div className="flex items-center">
      <button
        onClick={() => {
          setQuantity((pre) => {
            if (pre <= 0) return 0;
            else return --pre;
          });
        }}
        className="text-[1.2rem] w-5 h-5 p-3 bg-transparent border-[1px] border-slate-300 flex items-center justify-center "
      >
        -
      </button>
      <span className="py-3 px-5 h-5 flex items-center justify-center text-[1.1rem] font-bold] text-[#000] border-y-[1px] border-y-slate-300">
        {quantity}
      </span>
      <button
        onClick={() => {
          setQuantity((pre) => {
            if (pre >= 99) return 99;
            else return ++pre;
          });
        }}
        className="text-[1.2rem] w-5 h-5 p-3 bg-transparent border-[1px] border-slate-300 flex items-center justify-center "
      >
        +
      </button>
    </div>
  );
};

export default SetQuantity;
