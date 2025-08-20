"use client";

import clsx from "clsx";
import { DateRangePicker as AriaDateRangePicker, DateRangePickerProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { DateValue } from "react-aria";

const DateRangePicker = ({ className, ...props }: DateRangePickerProps<DateValue>) => {
  return (
    <AriaDateRangePicker
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

export default DateRangePicker;