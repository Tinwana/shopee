class Validator {
  required(value: string): string {
    if (value === "") return "Vui lòng điền vào mục này.";
    return "";
  }
  min(
    value: string,
    options?: {
      minLength: number;
      message: string;
    }
  ): string {
    const defaultValue = {
      minLength: 6,
      message: "Mật khẩu phải có 6 từ trở lên!",
    };
    if (options) {
      if (value.length < options?.minLength)
        if (options.message) {
          return options.message;
        }
      return `Mật khẩu phải có ${options.minLength} từ trở lên!`;
    }
    if (!options) {
      if (value.length < defaultValue.minLength) return defaultValue.message;
    }
    return "";
  }
  max(
    value: string,
    options?: {
      maxLength: number;
      message: string;
    }
  ) {
    const defaultValue = {
      maxLength: 128,
      message: "Mật khẩu phải bé hơn 128 từ!",
    };
    if (options) {
      if (value.length < options?.maxLength)
        if (options.message) {
          return options.message;
        }
      return `Mật khẩu phải bé hơn ${options.maxLength} từ!`;
    }
    if (!options) {
      if (value.length < defaultValue?.maxLength) return defaultValue.message;
    }
    return "";
  }
  isEmail(value: string) {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!isEmail.test(value)) {
      return "Email không hợp lệ!";
    }
    return "";
  }
}
export default new Validator();
