"use client";

import clsx from "clsx";
import { Checkbox as AriaCheckbox, CheckboxProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <AriaCheckbox
      className={twMerge(
        clsx(
          "group flex items-center gap-2 text-sm cursor-pointer",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default Checkbox;