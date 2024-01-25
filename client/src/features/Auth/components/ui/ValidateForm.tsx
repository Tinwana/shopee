import { FC } from "react";

interface ValidateFormProps {
  message: string;
}

const ValidateForm: FC<ValidateFormProps> = ({ message }) => {
  return (
    <div
      aria-live="polite"
      className="m-0 pt-[0.25rem] text-[.75rem] text-[#ff424f] min-h-[1rem] "
    >
      {message}
    </div>
  );
};

export default ValidateForm;
