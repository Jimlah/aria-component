"use client";

import clsx from "clsx";
import { Form as AriaForm, FormProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Form = ({ className, ...props }: FormProps) => {
  return (
    <AriaForm
      className={twMerge(
        clsx("flex flex-col gap-4", className)
      )}
      {...props}
    />
  );
};

export default Form;