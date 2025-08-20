"use client";

import clsx from "clsx";
import { CalendarGridHeader as AriaCalendarGridHeader, CalendarGridHeaderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const CalendarGridHeader = ({ className, ...props }: CalendarGridHeaderProps) => {
  return (
    <AriaCalendarGridHeader
      className={twMerge(
        clsx(
          "text-gray-500 dark:text-gray-400 font-medium",
          className
        )
      )}
      {...props}
    />
  );
};

export default CalendarGridHeader;