"use client";

import clsx from "clsx";
import { RangeCalendar as AriaRangeCalendar, RangeCalendarProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { DateValue } from "react-aria";

const RangeCalendar = ({ className, ...props }: RangeCalendarProps<DateValue>) => {
  return (
    <AriaRangeCalendar
      className={twMerge(
        clsx(
          "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4",
          className
        )
      )}
      {...props}
    />
  );
};

export default RangeCalendar;