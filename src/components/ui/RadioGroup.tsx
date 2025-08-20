"use client";

import clsx from "clsx";
import { RadioGroup as AriaRadioGroup, RadioGroupProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
  return (
    <AriaRadioGroup
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

export default RadioGroup;