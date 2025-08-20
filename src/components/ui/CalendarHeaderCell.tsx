"use client";

import clsx from "clsx";
import { CalendarHeaderCell as AriaCalendarHeaderCell, CalendarHeaderCellProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const CalendarHeaderCell = ({ className, ...props }: CalendarHeaderCellProps) => {
  return (
    <AriaCalendarHeaderCell
      className={twMerge(
        clsx(
          "text-sm font-medium text-gray-500 dark:text-gray-400 p-2",
          className
        )
      )}
      {...props}
    />
  );
};

export default CalendarHeaderCell;