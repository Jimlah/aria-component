"use client";

import clsx from "clsx";
import { NumberField as AriaNumberField, NumberFieldProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const NumberField = ({ className, ...props }: NumberFieldProps) => {
  return (
    <AriaNumberField
      className={twMerge(
        clsx(
          "group flex flex-col gap-1",
          "data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default NumberField;