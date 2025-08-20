"use client";

import clsx from "clsx";
import { DateField as AriaDateField, DateFieldProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { DateValue } from "react-aria";

const DateField = ({ className, ...props }: DateFieldProps<DateValue>) => {
  return (
    <AriaDateField
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

export default DateField;