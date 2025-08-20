"use client";

import clsx from "clsx";
import { DateInput as AriaDateInput, DateInputProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const DateInput = ({ className, ...props }: DateInputProps) => {
  return (
    <AriaDateInput
      className={twMerge(
        clsx(
          "flex border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2",
          "focus-within:border-blue-500 dark:focus-within:border-blue-400",
          "group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:cursor-not-allowed",
          className
        )
      )}
      {...props}
    />
  );
};

export default DateInput;