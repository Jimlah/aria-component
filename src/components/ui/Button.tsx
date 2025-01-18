"use client";

import { Button as AriaButton, ButtonProps } from "react-aria-components";

const Button = (props: ButtonProps) => {
  return (
    <AriaButton
      className="outline-none p-2 items-center justify-center flex"
      {...props}
    />
  );
};

export default Button;
