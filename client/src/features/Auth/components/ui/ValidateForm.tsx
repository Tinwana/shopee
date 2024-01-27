import { FC } from "react";

interface ValidateFormProps {
  message: string;
  type: string;
}

const ValidateForm: FC<ValidateFormProps> = ({ message, type }) => {
  return (
    <div
      aria-live="polite"
      className={`m-0 pt-[0.25rem] text-[.75rem] ${
        type === "success" ? "text-green-500" : "text-[#ff424f]"
      } min-h-[1rem]`}
    >
      {message}
    </div>
  );
};

export default ValidateForm;
