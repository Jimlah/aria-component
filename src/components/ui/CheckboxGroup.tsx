"use client";

import clsx from "clsx";
import { CheckboxGroup as AriaCheckboxGroup, CheckboxGroupProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => {
  return (
    <AriaCheckboxGroup
      className={twMerge(
        clsx(
          "group flex flex-col gap-2",
          "data-[disabled=true]:opacity-50",
          className
        )
      )}
      {...props}
    />
  );
};

export default CheckboxGroup;