"use client";
import { Button, Input } from "@/components/ui";
import { FC, FormEvent, useState } from "react";
import { ValidateForm } from "../../components";
import validator from "@/lib/validator";
import { postVerifyEmail } from "@/services";
const RegisterVerifyForm: FC = () => {
  const onSubmit = async (e: FormEvent) => {
    // Handle login logic here
    e.preventDefault();
    if (validate.email === "") {
      try {
        const res = await postVerifyEmail(registerEmail);
        setStatus({
          message: res?.message,
          type: res?.status,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const [borderInputEmail, setBorderInputEmail] = useState(
    "border-[rgba(0,0,0,.14);]"
  );
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [validate, setValidate] = useState({
    email: "",
  });
  const [status, setStatus] = useState({
    message: "",
    type: "",
  });
  //handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRegisterEmail(e.target.value);
  };

  return (
    <>
      <form className="" onSubmit={onSubmit}>
        <div className="mb-[10px]  ">
          <div
            className={`w-full h-[2.5rem] overflow-hidden border-[1px] ${borderInputEmail} rounded-[2px] shadow-sm flex items-center `}
          >
            <Input
              id="email"
              onFocus={() => {
                setBorderInputEmail("border-[rgba(0,0,0,.54);]");
              }}
              onBlur={() => {
                setValidate({
                  ...validate,
                  email:
                    validator.required(registerEmail) ||
                    validator.isEmail(registerEmail),
                });
                setBorderInputEmail("border-[rgba(0,0,0,.14);]");
              }}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="on"
              maxLength={128}
              type="text"
              value={registerEmail}
            />
          </div>
          <ValidateForm type="failure" message={validate.email} />
          <ValidateForm type={status.type} message={status.message} />
        </div>
        <Button
          type="submit"
          disabled={registerEmail === "" ? true : false}
          variant="destructive"
          className="disabled:opacity-60 w-full rounded-[2px]"
        >
          Đăng ký
        </Button>
      </form>
    </>
  );
};

export default RegisterVerifyForm;
