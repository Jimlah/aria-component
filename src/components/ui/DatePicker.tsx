"use client";

import clsx from "clsx";
import { DatePicker as AriaDatePicker, DatePickerProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { DateValue } from "react-aria";

const DatePicker = ({ className, ...props }: DatePickerProps<DateValue>) => {
  return (
    <AriaDatePicker
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

export default DatePicker;